(ns tools.time)

(defn datetimestr []
  (let [formattedDateTime
        (.format
         (.withZoneSameInstant
          (java.time.ZonedDateTime/now)
          (java.time.ZoneId/of "UTC"))
         (java.time.format.DateTimeFormatter/ofPattern "yyyyMMdd-HHmmss"))]
    (clojure.string/replace formattedDateTime #"-" "T")))
