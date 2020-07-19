(ns tools.time)

(defn datetimestr []
  (let [formattedDateTime
        (.format
         (.withZoneSameInstant
          (java.time.ZonedDateTime/now)
          (java.time.ZoneId/of "Europe/Amsterdam"))
         (. java.time.format.DateTimeFormatter ISO_OFFSET_DATE_TIME))]
    (str formattedDateTime)))
