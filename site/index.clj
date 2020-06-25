(ns site.index)

(defn body []
  [:body
   [:h1 "Work in Progress"]
   [:p "Welcome to MxMMz!!"]
   [:a {:href "./posts/clojure-learning-guide.html"} "Clojure Learning Guide"]])
