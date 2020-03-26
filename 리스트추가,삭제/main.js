const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');


// 폼 제출 이벤트
form.addEventListener('submit', addItem);
//삭제 이벤트
itemList.addEventListener('click', removeItem);
//필터 이벤트
filter.addEventListener('keyup', filterItems);


// 아이템 추가
function addItem(event){
    event.preventDefault();

    // get input value
    const newItem = document.querySelector('#item').value;

    // li엘리먼트 추가
    const li = document.createElement('li');
    // 클래스 추가
    li.className = 'list-group-item';
    // 자식으로 text노드 추가
    li.appendChild(document.createTextNode(newItem));

    // 버튼 추가하기
    const delbtn = document.createElement('button');
        //버튼 클래스 추가
    delbtn.className = 'btn btn-danger btn-sm float-right delete';
        //버튼의 텍스트 추가
    delbtn.appendChild(document.createTextNode('X'));
        // li에 버튼 추가
    li.appendChild(delbtn);

    itemList.append(li);
}

// 아이템 삭제
function removeItem(event){
    if(event.target.classList.contains('delete')){
        if(confirm('삭제할까요?')){
            //li를 삭제하기위해 현재 target인 버튼의 부모엘리먼트를 선택해 li변수에 담는다.
            const li = event.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//필터 아이템
function filterItems(event){
    //텍스트를 소문자로 변환
    const text = event.target.value.toLowerCase();
    // 리스트 얻기
    const items = itemList.getElementsByTagName('li');
    // 배열로 각각의 아이템 받기
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    });


}