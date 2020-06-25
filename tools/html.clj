(ns tools.html)

(require '[clojure.string :as str])

;; From https://github.com/borkdude/babashka/blob/master/examples/notes.clj#L21-L36
(defn html [v]
  (cond (vector? v)
        (let [tag      (first v)
              attrs    (second v)
              attrs    (when (map? attrs) attrs)
              elts     (if attrs (nnext v) (next v))
              tag-name (name tag)]
          (format "<%s%s>%s</%s>\n" tag-name (html attrs) (html elts) tag-name))
        (map? v)
        (str/join ""
                  (map (fn [[k v]]
                         (format " %s=\"%s\"" (name k) v)) v))
        (seq? v)
        (str/join " " (map html v))
        :else (str v)))
