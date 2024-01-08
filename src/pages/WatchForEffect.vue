<template>
  <div>
    <h1>Wykorzystanie watch i watchEffect w Composition API</h1>
    <p>Funkcja watchEffect() jest jednym z narzędzi reaktywności dostępnych w Vue 3 jako część Composition API. Pozwala
      ona na śledzenie zmian reaktywnych zmiennych i wykonywanie pewnych działań, kiedy te zmienne się zmieniają.</p>
    <p>Zasada działania watchEffect() polega na automatycznym wykrywaniu zależności. Gdy kod w ciele funkcji przekazanej
      do watchEffect() korzysta z reaktywnych zmiennych, Vue automatycznie "zapisuje się" na te zmienne jako zależności.
      Kiedy wartość jakiejkolwiek z tych zależności zmienia się, Vue ponownie wykonuje funkcję przekazaną do
      watchEffect().</p>
    <br />
    <strong>30 min.</strong>
    <p>Zadaniem w ćwiczeniu jest utworzenie komponentu, który będzie śledzić zmiany w różnych rodzajach danych i reagować
      na te zmiany</p>
    <li>komponent powinien zawierać pole tekstowe, pole liczbowe i obiekt konfiguracji</li>
    <li>można modyfikować te dane</li>
    <li>użyj `watch` do monitorowania zmian w polu tekstowym i liczbowym</li>
    <li>użyj `watchEffect` do reagowania na każdą zmianę w stanie komponentu</li>
    <li>użyj `watch` z opcją `deep` do monitorowania zmian w obiekcie konfiguracji</li>
    <li>Wyświetlaj logi lub komunikaty w konsoli w odpowiedzi na zmiany.</li>
  </div>
</template>