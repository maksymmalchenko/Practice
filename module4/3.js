// Создай объект notepad для работы с массивом заметок. Каждая заметка это объект следующего формата:

// id: string | integer;
// title: string;
// body: string;
// priority: integer[0 - 2];

// id - уникальный идентификатор объекта, чтобы можно было найти его в коллекции, строка.
// title - заголовок заметки, строка.
// body - текст заметки, строка.
// priority - значение приоритета, от 0 (низкий) до 2 (высокий).
// Вот карта приоритетов, используй ее.

const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

// Напиши код для работы методов данного объекта.

const notepad = {
  notes: [],

  /*
   * Принимает: ничего
   * Возвращает: все заметки, значение свойства notes
   */

  getNotes() {
    return this.notes;
  },

  /*
   * Ищет заметку в массиве notes
   *
   * Принимает: идентификатор заметки
   * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
   */

  findNoteById(id) {
    for (const note of notes) {
      if (note.id === id) {
        return note;
      }
    }
  },

  /*
   * Сохраняет заметку в массив notes
   *
   * Принимает: объект заметки
   * Возвращает: сохраненную заметку
   */

  saveNote(note) {},

  /*
   * Удаляет заметку по идентификатору из массива notes
   *
   * Принимает: идентификатор заметки
   * Возвращает: ничего
   */

  deleteNote(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      if ([note[i]].id === id) {
        notes.splice(i, 1);

        return;
      }
    }
  },

  /*
   * Обновляет контент заметки
   * updatedContent - объект с полями вида {имя: значение, имя: значение}
   * Свойств в объекте updatedContent может быть произвольное количество
   *
   * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
   * Возвращает: обновленную заметку
   */

  updateNoteContent(id, updatedContent) {},

  /*
   * Обновляет приоритет заметки
   *
   * Принимает: идентификатор заметки и ее новый приоритет
   * Возвращает: обновленную заметку
   */

  updateNotePriority(id, priority) {},

  /*
   * Фильтрует массив заметок по подстроке query.
   * Если значение query есть в заголовке или теле заметки - она подходит
   *
   * Принимает: подстроку для поиска в title и body заметки
   * Возвращает: новый массив заметок, контент которых содержит подстроку
   */

  filterNotesByQuery(query) {
    const filteredNotes = [];

    for (const note of notes) {
      if (query === note.title || query === note.body) {
        filteredNotes.push(note);
      }
    }

    return filteredNotes;
  },

  /*
   * Фильтрует массив заметок по значению приоритета
   * Если значение priority совпадает с приоритетом заметки - она подходит
   *
   * Принимает: приоритет для поиска в свойстве priority заметки
   * Возвращает: новый массив заметок с подходящим приоритетом
   */

  filterNotesByPriority(priority) {
    const filteredNotes = [];

    for (const note of notes) {
      if (priority === note.priority) {
        filteredNotes.push(note);
      }
    }

    return filteredNotes;
  },
};
