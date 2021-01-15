# Instalar Dependencias

Realizar npm install para instalar las dependencias necesarios para el funcionamiento.-

## Ejecutar

Ejecutar el comando npm start para ejecuar el programa, el mismo debe correr en http://localhost:3000/

3) In a ​ read.me ​ file, explain with your words how redux works and how it interacts with a React
application, be as detailed as you can.

Redux es una librería que controla el estado de nuestra aplicación web fácilmente, de una forma consistente entre cliente y servidor, testeable y con una gran experiencia de desarrollo. Personalmente utilicé la librería en mis proyectos personales donde la implementación al principio es bastante compleja, pero luego en el uso diario y en general una vez que esta todo creado, realmente la conexión entre el back y el front se hace mucho mas fácil, mejor de entender y de rápida utilización. 
Hay que tener en cuenta que Redux no fue solamente creado para ser usado con React sino que también se puede utilizar con otras librerías como Angular, Ember, jQuery o vanilla JavaScript.
Los estados son de solo lectura, lo que permite que nadie altere el estado de la aplicación, de lo contrario lo que hace es emitir una intención de modificarlo. También los cambios se hacen mediante funciones puras llamadas reducers que reciben el estado actual de la aplicación y la acción que uno quiere hacer y obtiene como resultado un nuevo estado sin modificar directamente el estado actual, podemos tener un solo Reducer encargado de todo o sino dividirlo en múltiples las cuales vamos a poder controlar el orden de ejecución.-
