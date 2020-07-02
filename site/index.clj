(ns site.index)

(require '[babashka.classpath :refer [add-classpath]])
(def userdir (System/getProperty "user.dir"))
(add-classpath userdir)
(require '[tools.html :as html])

(defn body []
  [:body
   [:blockquote
    "Neither from itself nor from another," [:br]
    "Nor from both," [:br]
    "Nor without a cause," [:br]
    "Does anything whatever, anywhere arise." [:br]
    "~ Nagarjuna"]])
