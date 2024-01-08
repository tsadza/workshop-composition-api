# Boilerplate i Dobre Praktyki w Composition API

## Boilerplate

Boilerplate contains Vue 2.7 application with both Vuex and Pinia onboard.

- Vuex Store is within /store folder
- Pinia Stores are within /stores folder

## Folder `/api`

- **Wrapper do Axiosa**: Ten wrapper służy jako centralny punkt zarządzania żądaniami HTTP w aplikacji. Ułatwia on jednolite zarządzanie żądaniami, obsługę błędów i logowanie. Dzięki temu, niezależnie od skali projektu, wszystkie żądania są obsługiwane spójnie i efektywnie.

- **Connectory**: Te reużywalne zestawy funkcji służą do pobierania danych i są kluczowe w unifikacji dostępu do zewnętrznych źródeł danych. Umożliwiają łatwą zmianę źródeł danych lub API bez wpływu na inne części aplikacji, co zwiększa elastyczność i skalowalność projektu.

## Folder `/components`

- **Reużywalne Komponenty**: W tym folderze skupiamy się na tworzeniu komponentów o niskim stopniu zróżnicowania, takich jak przyciski. Kluczowe jest tu wydzielenie przynajmniej jednego komponentu generycznego (np. `BaseButton`), który później jest używany w bardziej specjalistycznych komponentach (np. `AlertButton`, `SubmitButton`, `CancelButton`, `RedirectButton`). Takie podejście minimalizuje potrzebę przenoszenia specyficznej konfiguracji i pomaga utrzymać spójność interfejsu użytkownika oraz ułatwia późniejsze modyfikacje.

- W zakresie formatu komponentu wykorzystujemy wersję **ScriptSetup**.

```vue
<script setup>
  //
</script>
```

- Computed properties w Composition API mogą być zapisywalne.

```js
import { computed } from 'vue'

const editableText = computed({
  get: () => text.value,
  set: (newValue) => {
    text.value = newValue;
  },
});
```

## Folder `/composables`

- **Reużywalne Funkcjonalności**: Zawiera funkcjonalności, które mogą być wykorzystywane przez wiele komponentów lub modułów. Skupia się na przechowywaniu i zarządzaniu stanem dotyczącym własnej funkcjonalności, co zwiększa modułowość i reużywalność kodu.
- Zadadnicza różnica pomiędzy przechowywaniem stanu w Kompozycji a Pinia Store polega na tym, że reaktywne zmienne tworzone w Kompozycji istnieją tylko przez czas życia komponentu który je utrzymuje, natomiast Pinia Store żyje przez czas życia Aplikacji.

## Folder `/stores`

- **Magazyny Stanu Aplikacji**: Bazują na bibliotece Pinia i są przeznaczone do zarządzania stanem aplikacji. Ważne jest, aby logika biznesowa była zminimalizowana i umieszczona w odpowiednich serwisach. Store powinien być zasilany z Connectora lub, w razie potrzeby, wykorzystywać Adapter do dopasowania przetwarzanych danych. Celem jest, aby Store zajmował się wyłącznie czystymi danymi, a Connector odpowiadał za pobieranie danych i ich Cache'owanie.

```js
// Boilerplate dla Pinia Store
import { defineStore } from 'pinia'

const useDocuments = defineStore('documents', () => {
 // ...

 return  // ...
})

export default useDocuments;
```

```js
// użycie w komponencie
import { useDocuments } from '@/stores/documents'

const documents = useDocuments();
```
