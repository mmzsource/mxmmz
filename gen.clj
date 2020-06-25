#!/usr/bin/env bb

(require '[babashka.classpath :refer [add-classpath]])
(add-classpath ".")

(require '[clojure.java.shell :refer [sh]]
         '[clojure.java.io    :as io]
         '[site.index         :as idx]
         '[site.css           :as css]
         '[site.posts.clg     :as clg]
         '[tools.html         :as htmltools]
         '[tools.css          :as csstools])

(def head
  [:head
   [:title "Welcome"]
   [:meta {:charset "utf-8"}]
   (csstools/css (css/css))])

(defn wrap [body]
  (str "<!DOCTYPE html>"
       (htmltools/html [:html head body])))

(let [index (wrap (idx/body))
      clg   (wrap (clg/body))]
  (when (.exists (io/file "publish"))
    (sh "rm" "-rf" "publish"))
  (sh "mkdir" "-p" "publish/posts")
  (spit "publish/index.html"                        index)
  (spit "publish/posts/clojure-learning-guide.html" clg))
