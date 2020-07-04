#!/usr/bin/env bb

(require '[babashka.pods :as pods])
(pods/load-pod "pod-babashka-filewatcher")

(require '[babashka.classpath :refer [add-classpath]])
(add-classpath ".")

(require '[pod.babashka.filewatcher :as fw]
         '[clojure.java.shell :refer [sh]]
         '[clojure.java.io :as io]
         '[tools.time :as time])

(def pwd (System/getProperty "user.dir"))

(def page-to-open (io/file pwd "publish/index.html"))
; (def page-to-open (io/file pwd "publish/blog/clojure-learning-guide.html"))


(fw/watch "site" (fn [event]
                      (when (= :write (:type event))

                        (println (str (time/datetimestr) " Detected write event"))

                        (sh "./gen.clj")

                        (println (str (time/datetimestr) " Generated new site"))

                        (sh "open" (str page-to-open))

                        (println (str (time/datetimestr) " Opened newly generated page " page-to-open)))))

@(promise)
