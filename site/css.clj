(ns site.css)

; https://github.com/jensimmons/cssremedy/blob/master/css/remedy.css
(defn css-remedy []
  [;;;;;;;;;;;;;;;;;;;;;
   ;; Global Remedies ;;
   ;;;;;;;;;;;;;;;;;;;;;

   ; Use borderbox by default
   [:* {:box-sizing "border-box"}]

   ; Consistent line spacing
   [:html {:line-height "normal"}]

   ; Remove tiny space around edge of the page
   [:body {:margin "0"}]

   ;;;;;;;;;;;;;;
   ;; Headings ;;
   ;;;;;;;;;;;;;;

   ; rem units for headings
   [:h1 {:font-size "2rem"}]
   [:h2 {:font-size "1.5rem"}]
   [:h3 {:font-size "1.17rem"}]
   [:h4 {:font-size "1.00rem"}]
   [:h5 {:font-size "0.83rem"}]
   [:h6 {:font-size "0.67rem"}]

   ; keep h1 margins consistent, even when nested
   [:h1 {:margin "0.67em 0"}]

   ;;;;;;;;;;;;;;;;
   ;; Typography ;;
   ;;;;;;;;;;;;;;;;

   ; Overflow by default is bad
   [:pre {:white-space "pre-wrap"}]

   ; Solid, thin horizontal rules, remove color: gray,
   ; remove default 1px height and common 'overflow: hidden'
   [:hr {:border-style "solid"
         :border-width "1px 0 0"
         :color        "inherit"
         :height       "0"
         :overflow     "visible"}]

   ;;;;;;;;;;;;;;;;;;;;;;;
   ;; Embedded Elements ;;
   ;;;;;;;;;;;;;;;;;;;;;;;

   ; Block display, remove space-below when inline, responsive by default
   [:img :svg :video :canvas :audio :iframe :embed :object
    {:display "block"}]

   ; Maintain intrinsic aspect ratio when max-width is applied
   [:img :svg :video :canvas
    {:height "auto"}]

   ; No good reason to default to 300px
   [:audio {:width "100%"}]

   ;;;;;;;;;;;;;;;;;;
   ;; Old Browsers ;;
   ;;;;;;;;;;;;;;;;;;

   ; Remove borders on images inside links in IE 10 and earlier
   [:img {:border-style "none"}]

   ; Hide overflow in IE 10 and earlier
   [:svg {:overflow "hidden"}]

   ; Default block display on HTML5 elements
   [:article :aside :figcaption :figure :footer :header :hgroup :main :nav :section
    {:display "block"}]])


(defn css-site []
  [; Fonts
   [:* {:font-family "Arial, Helvetica, sans-serif"}]

   ; Font Sizes
   [:html {:font-size "18px"}]
   [:p :a {:font-size "1rem"}]

   ; Heights & widths
   [:p {:line-height "1.5"
        :max-width "80ch"}]
   [:li {:margin "8px 0"}]

   [:main {:width  "80%"
           :margin "80px auto"}]])


(defn css []
  (concat
   (css-remedy)
   (css-site)))
