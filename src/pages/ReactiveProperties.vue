<script setup>
//
</script>

<template>
  <div>
    <h1>Użycie ref i reactive do tworzenia reaktywnych danych.</h1>
    <p><strong>reactive</strong> służy do tworzenia reaktywnego obiektu. Wszystkie właściwości wewnątrz tego obiektu są
      automatycznie śledzone przez Vue.</p>
    <p>Jest to odpowiednie dla złożonych struktur danych, jak obiekty lub tablice.</p>
    <p>Musimy jednak uważać przy aktualizacji, żeby nie nadpisać reaktywnego obiektu.</p>
    <br />
    <p><strong>ref</strong> służy do tworzenia reaktywnej referencji do dowolnej wartości.</p>
    <p>Gdy używasz `ref` z prymitywem (np. string, number), Vue otacza tę wartość obiektem, który ma właściwość `.value`.
    </p>
    <p>Dzięki temu, kiedy zmieniasz wartość `.value`, Vue wie, że musi zaktualizować widok.</p>
    <br />
    <p>15 min.</p>
    <li>Wykorzystaj ref i reactive dla przechowania tablicy obiektów, zwróć uwagę jakie różnice są w zasileniu pustej
      tablicy danymi w przypadku ref i reactive</li>
    <li>Przekaż do komponentu dziecka argumenty w postaciach ref i reactive. Zobacz jaka jest różnica w przypadku próby
      modyfikowania propsa w komponencie dziecka.</li>
  </div>
</template>