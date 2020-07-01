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

(defn head [{:keys [title path2root]}]
  [:head
   [:title title]
   [:meta {:charset "utf-8"}]
   [:link {:rel "stylesheet" :href (str path2root "remedy.css")}]
   [:link {:rel "stylesheet" :href (str path2root "styles.css")}]])

(defn wrap [body m]
  (str "<!DOCTYPE html>\n"
       (htmltools/html [:html
                        (head m)
                        [:main body]])))

(let [index (wrap (idx/body) {:title "MxMMz Home" :path2root ""})
      clg   (wrap (clg/body) {:title "Clojure Getting Started Guide" :path2root "../"})
      lisp  (wrap (lisp/body) {:title "Lisp Getting Started Guide" :path2root "../"})
      emacs (wrap (emacs/body) {:title "Emacs Getting Started Guide" :path2root "../"})]
  (when (.exists (io/file "publish"))
    (sh "rm" "/publish/*.html")
    (sh "rm" "/publish/posts/*.html"))
  (sh "mkdir" "-p" "publish/posts")
  (sh "cp" "site/remedy.css" "publish/remedy.css")
  (sh "cp" "site/styles.css" "publish/styles.css")
  (spit "publish/index.html"                        index)
  (spit "publish/posts/clojure-learning-guide.html" clg)
  (spit "publish/posts/lisp-learning-guide.html"    lisp)
  (spit "publish/posts/emacs-learning-guide.html"   emacs))
