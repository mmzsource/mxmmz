#!/usr/bin/env bb

(require '[babashka.classpath :refer [add-classpath]])
(add-classpath ".")

(require '[clojure.java.shell :refer [sh]]
         '[clojure.java.io    :as io]
         '[site.index         :as idx]
         '[site.css           :as css]
         '[site.posts.clg     :as clg]
         '[site.posts.lisp    :as lisp]
         '[site.posts.emacs   :as emacs]
         '[tools.html         :as htmltools]
         '[tools.css          :as csstools])

(def head
  [:head
   [:title "Welcome"]
   [:meta {:charset "utf-8"}]
   (csstools/css (css/css))])

(defn wrap [body]
  (str "<!DOCTYPE html>\n"
       (htmltools/html [:html head body])))

(let [index (wrap (idx/body))
      clg   (wrap (clg/body))
      lisp  (wrap (lisp/body))
      emacs (wrap (emacs/body))]
  (when (.exists (io/file "publish"))
    (sh "rm" "/publish/*.html")
    (sh "rm" "/publish/posts/*.html"))
  (sh "mkdir" "-p" "publish/posts")
  (spit "publish/index.html"                        index)
  (spit "publish/posts/clojure-learning-guide.html" clg)
  (spit "publish/posts/lisp-learning-guide.html"    lisp)
  (spit "publish/posts/emacs-learning-guide.html"   emacs))
