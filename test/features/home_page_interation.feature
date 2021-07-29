@smoke
Feature: Interaction on Home page

@simple
Scenario: Get page title
Given I open "https://www.kinopoisk.ru" url
Then Page title should be "КиноПоиск. Все фильмы планеты."

@outline
Scenario Outline: Search different movies
Given I open "https://kinopoisk.ru" url
And I enter movie title "<Title>" in search
And I wait for "5" seconds
Then In search dropdown movie "Title" should be shown

Examples:
  | Title                             | 
  | Дом, который построил Джек        | 
  | Лига справедливости Зака Снайдера | 