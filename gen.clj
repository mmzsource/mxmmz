#!/usr/bin/env bb

(require '[babashka.classpath :refer [add-classpath]])
(add-classpath ".")

(require '[clojure.java.shell :refer [sh]]
         '[clojure.java.io    :as io]
         '[site.index         :as idx]
         '[site.posts         :as posts]
         '[site.about         :as about]
         '[site.posts.clg     :as clg]
         '[tools.html         :as html])

(defn head [{:keys [title path2root]}]
  [:head
   [:title title]
   [:meta {:charset "utf-8"}]
   [:link {:rel "stylesheet" :href (str path2root "/remedy.css")}]
   [:link {:rel "stylesheet" :href (str path2root "/styles.css")}]])

(def header
  [:header
   [:h1 "MxMMz"]])

(defn nav [{:keys [path2root]}]
  [:nav
   [:p
    (html/a (str path2root "/index.html") "Home") " "
    (html/a (str path2root "/posts.html") "Blog") " "
    (html/a (str path2root "/about.html") "About")]])

(def footer
  [:footer
   [:h4 "~ Dissolve and Reconstitute ~"]])

(def sidel
  [:div {:class "sidel"}])

(def sider
  [:div {:class "sider"}])

(defn wrap [body m]
  (str "<!DOCTYPE html>\n"
       (html/html [:html
                   (head m)
                   header
                   (nav m)
                   sidel
                   [:main body]
                   sider
                   footer])))

(let [index (wrap (idx/body) {:title "MxMMz Home" :path2root "."})
      posts (wrap (posts/body) {:title "Blog" :path2root "."})
      about (wrap (about/body) {:title "About" :path2root "."})
      clg   (wrap (clg/body) {:title "Clojure Learning Guide" :path2root ".."})]
  (when (.exists (io/file "publish"))
    (sh "rm" "publish/*.html")
    (sh "rm" "publish/*.css")
    (sh "rm" "publish/posts/*.html"))
  (sh "mkdir" "-p" "publish/posts")
  (sh "cp" "site/remedy.css" "publish/remedy.css")
  (sh "cp" "site/styles.css" "publish/styles.css")
  (spit "publish/index.html"                        index)
  (spit "publish/posts.html"                        posts)
  (spit "publish/about.html"                        about)
  (spit "publish/posts/clojure-learning-guide.html" clg))
