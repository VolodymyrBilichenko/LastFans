// Підключення функціоналу "Чертоги Фрілансера"
import {bodyLock, bodyLockStatus, bodyUnlock, bodyLockToggle,} from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

// ===========================================================================

const buttonMenu = document.querySelector('.button-menu-header');
const pageMenu = document.querySelector('.page-menu');

buttonMenu.addEventListener('click', () => {
    [buttonMenu, pageMenu].forEach(element => {
        element.classList.toggle('active');
        
    });

});

document.addEventListener('click', (event) => {
    const isClickInsideButtonMenu = buttonMenu.contains(event.target);
    const isClickInsidePageMenu = pageMenu.contains(event.target);

    if (!isClickInsideButtonMenu && !isClickInsidePageMenu) {
        // Если клик совершен вне указанных элементов, убираем класс актив
        buttonMenu.classList.remove('active');
        pageMenu.classList.remove('active');
    }
});



const itemPageMenus = document.querySelectorAll('.item-page-menu');

itemPageMenus.forEach(itemPageMenu => {
    itemPageMenu.addEventListener('click', () => {
        // Удаляем класс 'active' у всех элементов с классом 'item-page-menu'
        itemPageMenus.forEach(item => {
            item.classList.remove('active');
        });
        // Добавляем класс 'active' к текущему элементу
        itemPageMenu.classList.add('active');
    });
});

// ====================================================================================================

const allFields = document.querySelectorAll('.field');
const screenWidth = window.innerWidth;

document.addEventListener('click', (event) => {
    const isField = event.target.closest('.field');
    const isPopup = event.target.closest('.popup-main');

    if (!isField && !isPopup) {
        allFields.forEach(field => {
            field.classList.remove('field-active');
            bodyUnlock()
        });
    }
});

allFields.forEach(field => {
    field.addEventListener('click', (event) => {
        event.stopPropagation();
        if (!field.classList.contains('field-active')) {
            field.classList.add('field-active');
            if(screenWidth < 767.98){
                bodyLock()
            }
            allFields.forEach(otherField => {
                if (otherField !== field) {
                    otherField.classList.remove('field-active');
                    bodyUnlock()

                }
            });
        } else {
            field.classList.remove('field-active');
            bodyUnlock()
        }
    });
});

const allPopups = document.querySelectorAll('.popup-main, .popup-actions');
allPopups.forEach(popup => {
    popup.addEventListener('click', event => {
        event.stopPropagation();
    });
});


// =====================================================================================================

function toggleActive(element) {
    element.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    var elementsWithOnclick = document.querySelectorAll('[onclick="toggleActive(this)"]');

    elementsWithOnclick.forEach(function(element) {
        element.removeAttribute('onclick'); 

        element.addEventListener('click', function() {
            toggleActive(this);
        });
    });
});


// =====================================================================================================



document.addEventListener("DOMContentLoaded", function() {
    const fields = document.querySelectorAll('.field-block-add-vid__item');
    
    fields.forEach(function(field) {
        const values = field.querySelectorAll('.field-block-add-vid__value');
        const summary = field.querySelector('.field-block-add-vid__title');

        values.forEach(function(value) {
            value.addEventListener('click', function() {
                summary.textContent = this.textContent;
            });
        });
    });
});



// =====================================================================================================
 
 const tabs = document.querySelectorAll('.tabs-profile__item');

 tabs.forEach(function(tab) {
     tab.onclick = function() {

         tabs.forEach(function(tab) {
             tab.classList.remove('active');
         });

         tab.classList.add('active');

     };
 });

 const tabsContent = document.querySelectorAll('.tabs-content-profile__item');

 tabsContent.forEach(function(tab) {
     tab.onclick = function() {

        tabsContent.forEach(function(tab) {
             tab.classList.remove('active');
         });

         tab.classList.add('active');

     };
 });




// =====================================================================================================
const switchInput = document.querySelector(".switch-mode");
if(switchInput){
    document.addEventListener("DOMContentLoaded", function() {
        const modeText = document.querySelector(".mode__text");
        
        switchInput.addEventListener("change", function() {
            document.documentElement.classList.toggle("dark");
            if (document.documentElement.classList.contains("dark")) {
                modeText.textContent = "Dark Mode";
            } else {
                modeText.textContent = "Light Mode";
            }
        });
    });
}
// =====================================================================================================
document.addEventListener("DOMContentLoaded", function() {
    const foldersItems = document.querySelectorAll('.folders-profile__item');

    foldersItems.forEach(item => {
        item.addEventListener('click', function() {
            // Удаление класса "active" у всех элементов
            foldersItems.forEach(item => {
                item.classList.remove('active');
            });

            // Добавление класса "active" к выбранному элементу
            this.classList.add('active');
        });
    });
});
// =====================================================================================================
document.addEventListener("DOMContentLoaded", function() {
    var items = document.querySelectorAll(".item-body-payment");
    items.forEach(function(item) {
        item.addEventListener("click", function() {
            // Удаляем класс active у всех элементов
            items.forEach(function(element) {
                element.classList.remove("active");
            });
            // Добавляем класс active к текущему элементу
            this.classList.add("active");
        });
    });
});
// =====================================================================================================

// =====================================================================================================
const filterHeader = document.querySelector('.header-video-store__filter');
if(filterHeader){
    document.addEventListener("DOMContentLoaded", function() {
        const filterDropdown = document.querySelector('.filters-video-store');
        const filterCloseBtn = document.querySelector('.filters-video-store__close');
    
        function toggleFilters() {
            filterDropdown.classList.toggle('active');
            bodyLockToggle();
        }
    
        filterHeader.addEventListener('click', toggleFilters);
    
    
        filterCloseBtn.addEventListener('click', toggleFilters);
    
        document.addEventListener('click', function(event) {
            const targetElement = event.target;
            if (!filterDropdown.contains(targetElement) && !filterHeader.contains(targetElement)) {
                filterDropdown.classList.remove('active');
            }
        });
    });
}


// =====================================================================================================

// =====================================================================================================
const customSelect = document.querySelector('.select-custom')
if(customSelect){
    document.addEventListener("DOMContentLoaded", function() {
        // Находим элементы
        const addButton = document.querySelector('.select-custom__button');
        const list = document.querySelector('.select-custom__list');
        const listItems = document.querySelectorAll('.select-custom__item');
        const selectBody = document.querySelector('.select-custom__body');
    
        // Добавляем обработчик клика на кнопку
        addButton.addEventListener("click", function() {
            list.classList.toggle('active');
        });
    
        // Добавляем обработчик клика на элементы списка
        listItems.forEach(function(item) {
            item.addEventListener("click", function() {
                // Проверяем, был ли уже выбран этот элемент
                if (this.classList.contains('selected')) {
                    // Удаляем элемент из select-custom__body
                    const existingTags = selectBody.querySelectorAll('span');
                    existingTags.forEach(function(tag) {
                        if (tag.textContent === this.textContent) {
                            tag.remove();
                        }
                    }, this);
                    this.classList.remove('selected');
                } else {
                    // Добавляем элемент в select-custom__body
                    const text = this.textContent;
                    const newTag = document.createElement('span');
                    newTag.textContent = text;
                    selectBody.appendChild(newTag);
                    this.classList.add('selected');
                }
            });
        });
    
        // Добавляем обработчик клика на документ для закрытия списка при клике вне его области
        document.addEventListener("click", function(event) {
            const isClickInsideList = list.contains(event.target);
            const isClickInsideButton = addButton.contains(event.target);
            if (!isClickInsideList && !isClickInsideButton) {
                list.classList.remove('active');
            }
        });
    });
}


// =====================================================================================================
if(document.getElementById("post-date")){
    new AirDatepicker('#post-date', {
        isMobile: true,
        autoClose: true,
        timepicker: true,
        // inline: true,
        minDate: new Date(),
        dateFormat: 'MMM dd',
        multipleDatesSeparator: ' - ',
        locale: {
          days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          today: 'Today',
          clear: 'Clear',
          dateFormat: 'MM/dd/yyyy',
          timeFormat: 'hh:mm aa',
          firstDay: 1
        },
        
        
      });
}



if(document.getElementById("min")){
    new AirDatepicker('#min', {
        isMobile: true,
        autoClose: true,
        // inline: true,
        minDate: new Date(),
        dateFormat: 'MMM dd',
        multipleDatesSeparator: ' - ',
        locale: {
          days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          today: 'Today',
          clear: 'Clear',
          dateFormat: 'MM/dd/yyyy',
          timeFormat: 'hh:mm aa',
          firstDay: 1
        },
        
        
      });
}

if(document.getElementById("max")){
    new AirDatepicker('#max', {
        isMobile: true,
        autoClose: true,
        // inline: true,
        minDate: new Date(),
        dateFormat: 'MMM dd',
        multipleDatesSeparator: ' - ',
        locale: {
          days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          today: 'Today',
          clear: 'Clear',
          dateFormat: 'MM/dd/yyyy',
          timeFormat: 'hh:mm aa',
          firstDay: 1
        },
        
        
      });
}



// =====================================================================================================
// TEXT EDITOR
var simplemde = new SimpleMDE({ element: document.getElementById("editor") });

// =====================================================================================================

document.addEventListener('DOMContentLoaded', function() {
    const addButtonExcluding = document.querySelector('.exclude-input-box__add');
    const massMessageBody = document.querySelector('.popup-mass-message__body');
    const backButton = document.querySelector('.excluding__back');

    if (addButtonExcluding) {
        addButtonExcluding.addEventListener('click', function() {
            massMessageBody.classList.toggle('active');
        });
        backButton.addEventListener('click', function(){
            massMessageBody.classList.remove('active');
        })
    }
});





// =====================================================================================================
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.groups__slide');

    slides.forEach(function(slide) {
        slide.addEventListener('click', function() {
            slides.forEach(function(s) {
                s.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
// =====================================================================================================
const chatContent = document.querySelector(".content-chat");
if(chatContent){
    function scrollToBottom() {
        chatContent.scrollTop = chatContent.scrollHeight;
    }
    scrollToBottom();
}
// =====================================================================================================
const themeItems = document.querySelectorAll('.themes-messages-user__item');
const chatTheme = document.querySelector('.theme');

if (themeItems && chatTheme) {
    let activeTheme = null; 

    function updateChatBackground() {
        if (activeTheme) {
            const background = getComputedStyle(activeTheme).getPropertyValue('background');
            chatTheme.style.background = background;
        }
    }


    themeItems.forEach(item => {
        item.addEventListener('click', function() {

            if (activeTheme) {
                activeTheme.classList.remove('active');
            }
            

            this.classList.add('active');
            activeTheme = this; 
            

            updateChatBackground();
            

            localStorage.setItem('chatBackground', getComputedStyle(activeTheme).getPropertyValue('background'));
        });
    });


    window.onload = function() {
        const savedBackground = localStorage.getItem('chatBackground');
        if (savedBackground) {
            chatTheme.style.background = savedBackground;
        }
    };
}
// =====================================================================================================
const monthItems = document.querySelectorAll('.item-months-statistics');

if(monthItems){
    document.addEventListener('DOMContentLoaded', function() {
    
        monthItems.forEach(function(item) {
            item.addEventListener('click', function() {
    
                monthItems.forEach(function(el) {
                    el.classList.remove('active');
                });
    
                this.classList.add('active');
            });
        });
    });
}


const monthRange = document.querySelector('.months-statistics-range');

if(monthRange){
    document.addEventListener('DOMContentLoaded', function() {
        const popupMonth = document.querySelector('.popup-months-statistics-range');
        monthRange.addEventListener('click', function(event) {
            this.classList.toggle('active');
            event.stopPropagation();
            monthItems.forEach(function(el) {
                el.classList.remove('active');
            });
        });
    
        popupMonth.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    
    
        document.addEventListener('click', function() {
            monthRange.classList.remove('active');
        });
    });
}

const monthRangeItems = document.querySelectorAll('.popup-months-statistics-range__item');

if(monthRangeItems){
    document.addEventListener('DOMContentLoaded', function() {
    
        monthRangeItems.forEach(function(item) {
            item.addEventListener('click', function() {
    
                monthRangeItems.forEach(function(el) {
                    el.classList.remove('active');
                });
    
                this.classList.add('active');
            });
        });
    });
}
// =====================================================================================================
// STATISTICS

document.addEventListener('DOMContentLoaded', function() {
    var earningsCanvas = document.getElementById('earnings');
    if (earningsCanvas) {
        var earnings = earningsCanvas.getContext('2d');
        var gradient = earnings.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#3f79cf');
        gradient.addColorStop(1, 'rgba(63, 121, 207, 0)');
    
        var earningsChart = new Chart(earnings, {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4', '5', '6', '7'],
                datasets: [{
                    data: [0, 200, 250, 390, 150, 20, 100],
                    fill: true,
                    backgroundColor: gradient,
                    borderColor: '#3F79CF',
                    borderWidth: 5,
                    pointRadius: 0,
                    tension: 0.4,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y;
                            }
                        }
                    }
                }
            }
        });
        
    }

    var visitsCanvas = document.getElementById('visits');
    if (visitsCanvas) {
        var visits = visitsCanvas.getContext('2d');
        var gradient = visits.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#3f79cf');
        gradient.addColorStop(1, 'rgba(63, 121, 207, 0)');
    
        var visitsChart = new Chart(visits, {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4', '5', '6', '7'],
                datasets: [{
                    data: [12, 19, 3, 5, 2, 3, 7],
                    fill: true,
                    backgroundColor: gradient,
                    borderColor: '#3F79CF',
                    borderWidth: 5,
                    pointRadius: 0,
                    tension: 0.4,
                }, ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y;
                            }
                        }
                    }
                },
            },
        });
    }
});


// =====================================================================================================
// DELETE
document.addEventListener('DOMContentLoaded', function() {
    // Получаем все элементы с классом block-vid
    var blockVids = document.querySelectorAll('.block-vid');

    // Для каждого элемента добавляем обработчик события на кнопку удаления
    blockVids.forEach(function(blockVid) {
        var deleteButton = blockVid.querySelector('.button-delete');
        deleteButton.addEventListener('click', function() {
            // Устанавливаем opacity в 0
            blockVid.style.transform = 'scale(0)';
            // Через секунду удаляем элемент
            setTimeout(function() {
                blockVid.remove();
            }, 300);
        });
    });
});
// =====================================================================================================
// LIVE

const liveBody = document.querySelector('.live__body');

if(liveBody){
    liveBody.addEventListener('click', function() {
        this.classList.toggle('active');
    });
}


// =====================================================================================================

// =====================================================================================================

// =====================================================================================================

// =====================================================================================================
