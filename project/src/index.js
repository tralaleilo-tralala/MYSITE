let GetTodosDateFromJSONPlaceholder = async () => {
    try {
        console.log("Начало запроса")
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/10')

        if (!response.ok) console.log("Ошибка")

        let data = await response.json()
        console.log("Наши данные:", data)
    } catch(error) {
        console.log("Возникла ошибка при запросе:", error)
    } finally {
        console.log("Запрос завершился")
    }
}

GetTodosDateFromJSONPlaceholder()