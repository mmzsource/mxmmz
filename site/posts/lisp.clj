(ns site.posts.lisp)

(require '[babashka.classpath :refer [add-classpath]])
(def userdir (System/getProperty "user.dir"))
(add-classpath userdir)
(require '[tools.html :as html])

(defn body []
  [:body
   [:h1 "Lisp Learning Guide"]

   [:p
    "WIP: links to get started with Lisp."]])

; WIP: links on Lisp. SICP, Most beautiful code, Maxwell equations, Lisp podcast, On lisp, etc
