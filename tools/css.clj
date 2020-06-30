(ns tools.css)

(require '[tools.html :as html])

;; From https://gdeer81.github.io/marginalia/
;; ex. (css [:h1 {:color "blue"}] [:div.content p {:text-indent "1em"}])
;; -> h1 {color: blue;} div.content p {text-indent: 1em;}
(defn css-rule [rule]
  (let [sels  (reverse (rest (reverse rule)))
        props (last rule)]
    (str (apply str (interpose " " (map name sels)))
         "{" (apply str (map #(str (name (key %)) ":" (val %) ";") props)) "}")))

(defn css
  [rules]
  (html/html [:style (apply str (map css-rule rules))]))
