(ns site.posts)

(require '[babashka.classpath :refer [add-classpath]])
(def userdir (System/getProperty "user.dir"))
(add-classpath userdir)
(require '[tools.html :as html])

(defn body []
  [:body
   [:h1 "Posts"]
   (html/ul
    [(html/a
      "./posts/clojure-learning-guide.html"
      "Clojure(Script) Learning Guide")
     (html/a
      "./posts/lisp-learning-guide.html"
      "Lisp Learning Guide")
     (html/a
      "./posts/emacs-learning-guide.html"
      "Emacs Learning Guide")])])
