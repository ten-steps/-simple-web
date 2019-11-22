package main

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"html/template"
	"log"
	"net/http"
	"strings"
)
var gloablSessions 	s
// 登录
func login(w http.ResponseWriter, r *http.Request) {
	println("====访问登录页面====")

	if r.Method == "GET" {
		tem, err := template.ParseFiles("login.html")
		checkErr(err)
		tem.Execute(w, nil)
	} else if r.Method == "POST" {
		println("==== 进行登录操作 ====")
		name := r.PostFormValue("username")
		password := r.PostFormValue("password")
		println(name, password)
		if len(name) == 0 || len(password) == 0 {
			fmt.Fprintf(w, "参数错误")
		}
		// 连接数据库
		db, err := sql.Open("mysql", "root:root@/test?charset=utf8")
		checkErr(err)

		type userInfo struct {
			id         int
			username   string
			department string
			created    string
		}
		user := new(userInfo)
		// 查询数据库中是否存在当前用户
		row := db.QueryRow("SELECT uid,username,departname,created FROM userinfo WHERE username=? AND password=?", name, password).Scan(&user.id, &user.username, &user.department, &user.created)
		if row != nil {
			fmt.Fprintf(w,"用户名或密码错误")
		}else{
			fmt.Fprintf(w,"登录成功")
		}
	}

}

// 首页
func home(w http.ResponseWriter, r *http.Request) {
	r.ParseForm() // 解析参数
	fmt.Println(r.Form)
	fmt.Println("path:", r.URL.Path)
	fmt.Println("scheme", r.URL.Scheme)
	fmt.Println(r.Form["url_long"])
	for k, v := range r.Form {
		fmt.Println("key:", k)
		fmt.Println("val:", strings.Join(v, ""))
	}
	tem, err := template.ParseFiles("index.html")
	checkErr(err)
	tem.Execute(w, nil)
}

// 文件上传
//func upload() {
//
//}

func main() {
	http.HandleFunc("/", home)
	http.HandleFunc("/login", login)
	//静态文件处理
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))
	//http.HandleFunc("/login", login)
	err := http.ListenAndServe(":9090", nil)
	if err != nil {
		log.Fatal("ListenAndServe:", err)
	}
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
