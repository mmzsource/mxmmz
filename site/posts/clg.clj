(ns site.posts.clg)

(def userdir (System/getProperty "user.dir"))

(require '[babashka.classpath :refer [add-classpath]])
(add-classpath userdir)

(require '[tools.html :as html])

(defn body []
  [:body

   [:h1 "Clojure Learning Guide"]

   [:p "After experimenting with Clojure(script) for years, a colleague asked me
   to share some 'getting started' links. Without further ado:"]

   [:h2 "Books"]

   [:p
    "If books are your thing and you don't have Lisp programming experience, I'd
    recommend these books to get a good start:"]

   (html/li [(html/a "https://pragprog.com/titles/roclojure/" "Getting Clojure ")
             (html/a "https://www.oreilly.com/library/view/living-clojure/9781491909270/" "Living Clojure")])
   [:p
    "Sometimes you only need some good examples to solve a problem at hand.
    That's where these reference books can help a lot:"]

   (html/li [(html/a "https://www.manning.com/books/clojure-the-essential-reference" "Clojure, The Essential Reference")
             (html/a "https://www.oreilly.com/library/view/clojure-cookbook/9781449366384/" "Clojure Cookbook")])


   [:h2 "Courses"]
   [:h2 "Practice"]
   [:h2 "Documentation"]
   [:h2 "Talks"]])
