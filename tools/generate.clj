(ns tools.generate)

(require '[clojure.string :as str])


;; From https://github.com/borkdude/babashka/blob/master/examples/notes.clj#L21-L36
(defn- generate [v]
  (cond (vector? v)
        (let [tag      (first v)
              attrs    (second v)
              attrs    (when (map? attrs) attrs)
              elts     (if attrs (nnext v) (next v))
              tag-name (name tag)]
          (format "<%s%s>%s</%s>\n" tag-name (generate attrs) (generate elts) tag-name))
        (map? v)
        (str/join ""
                  (map (fn [[k v]]
                         (format " %s=\"%s\"" (name k) v)) v))
        (seq? v)
        (str/join " " (map generate v))
        :else (str v)))

(defn html [v]
  (generate v))

(defn xml [v]
  (generate v))

(defn a
  ([href display-name]
   [:a
     {:href   href}
    display-name]))


(defn li [item]
  [:li item])


(defn ul [coll]
  (reduce
   (fn [acc item]
     (conj acc (li item)))
   [:ul]
   coll))


(defn twitter []
  (a "https://twitter.com/MMz_" "twitter"))
