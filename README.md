# prostodocelu
Aplikacja nawigacyjna dla kurierów i turystów


Nawigacja Azymut

Nowoczesna aplikacja webowa do nawigacji pieszej i rowerowej, oferująca zaawansowane funkcje analizy trasy, informacji turystycznych, danych historycznych oraz wizualizacji zjawisk astronomicznych.
Aplikacja działa w przeglądarce oraz jako PWA (Progressive Web App) z obsługą pełnego ekranu, śledzenia GPS i lokalnego zapisu ustawień.
Funkcje główne
1. Podstawowa nawigacja
Wyznaczanie celu poprzez kliknięcie na mapie lub wpisanie adresu.
Obsługa wyszukiwania głosowego (Web Speech API).
Dynamiczna linia do celu (azymut).
Automatyczne i manualne tryby widoku:
Dopasowanie do trasy (fit).
Dynamiczne śledzenie użytkownika.
Centrum na celu.
Symulator GPS do testowania bez poruszania się.

ETA – Szacowanie czasu dotarcia
Zaawansowany widżet ETA z 4 trybami prezentacji:
Warianty prędkości (wolniej / optymalnie / szybciej).
Tryb automatyczny (podświetlanie prędkości najbliższej aktualnej).
Przedział czasowy przylotu.
Ciekawostki zależne od długości czasu („ugotujesz jajko”, „krótki film”, itp.).
Użytkownik może ustawić własne prędkości referencyjne, które zapisywane są w localStorage.

Informacje turystyczne
Aplikacja prezentuje obiekty znajdujące się w pobliżu użytkownika w zależności od wybranej kategorii.

Obsługiwane źródła:
Overpass API (OSM)
Restauracje, hotele, parki, muzea, apteki, punkty widokowe, jeziora i wiele innych.

Niestandardowe warstwy:
Historia przynależności miasta – na podstawie specjalnej bazy geograficzno-historycznej.
Data przyłączenia terenów do Gdańska.
Data budowy budynków Trójmiasta (import z Google Sheets).
Regionalizacja.

Dla każdego obiektu wyświetlane są najbliższe punkty wraz z odległością oraz możliwość nawigacji.

Dane wysokości (elewacja)
Aplikacja pobiera wysokość użytkownika oraz celu i:
prezentuje różnicę wysokości przy markerze celu,
aktualizuje dane co 15 sekund w trakcie nawigacji,
używa ikon markerów z informacją o przewyższeniu.

Słońce i księżyc – Wizualizacja astronomiczna
Aplikacja potrafi pokazywać:
pozycję słońca i księżyca na mapie,
wysokość nad horyzontem,
fazę księżyca,
linie trajektorii,
czas wschodów i zachodów.
Aktualizacja odbywa się co 15 minut, a dane są buforowane lokalnie.

Limity prędkości
Widżet wyświetla:
bieżący limit prędkości,
odległość do jego zmiany,
alerty wizualne przy przekroczeniu.

Historia pozycji
Aplikacja zapisuje punkty śledzenia i może je oznaczać na mapie w formie niewielkich markerów.

Dostępne tryby mapy
OpenStreetMap
OpenTopoMap (topografia)
ArcGIS Satellite + warstwa opisowa
Ostatnio użyty tryb zapisywany jest lokalnie.

Interfejs użytkownika
Wysuwane menu z ustawieniami.
Panel kategorii turystycznych.
Panel ustawień ETA.
Przycisk pełnego ekranu.
Widżety automatycznie ukrywające się po braku aktywności.
Responsywność i optymalizacja pod urządzenia mobilne.

Wykorzystane biblioteki
Leaflet – renderowanie mapy.
SunCalc – obliczenia pozycji słońca i księżyca.
Overpass API – dane OSM.
Google Sheets CSV (via proxy) – dane budynków i historii.
Web Speech API – rozpoznawanie mowy.
Geolocation API – lokalizacja użytkownika.
LocalStorage – zapamiętywanie ustawień.

Instalacja (PWA)
Aplikacja posiada:
manifest manifest.json,
deklarację theme-color,
ikony,
obsługę trybu pełnoekranowego.

Instalacja:
Otwórz stronę w przeglądarce mobilnej.
Wybierz „Dodaj do ekranu głównego”.
Uruchom jak pełnowartościową aplikację.

Struktura projektu/
├── index.html         # Główna aplikacja
├── manifest.json      # Manifest PWA
├── service-worker.js? 
