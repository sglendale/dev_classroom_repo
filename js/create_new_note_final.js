class App{
    constructor(){
        this.notes=JSON.parse(localStorage.getItem('notes')) || [];
        this.title="";
        this.text="";
        this.id="";
        this.$placeholder=document.querySelector("#placeholder");
        this.$form=document.querySelector("#form");
        this.$notes=document.querySelector("#notes");
        this.$noteTitle=document.querySelector("#noteTitle");
        this.$noteText=document.querySelector("#noteText");
        this.$formButtons=document.querySelector("#form-buttons");
        this.$formCloseButton=document.querySelector("#form-close-button");
        this.$modal=document.querySelector(".modal");
        this.$modalTitle=document.querySelector(".modal-title");
        this.$modalText=document.querySelector(".modal-text");
        this.$modalCloseButton=document.querySelector(".modal-close-button");
        this.render();
        this.addEventListeners();
    }

    addEventListeners(){
        document.body.addEventListener("click",event => {
            //event=> to get an event and pass it to call back
            this.handleFormClick(event);
            //populates the modal with information contained on note
            this.selectorNote(event);
            //open the Modal when clicked on note
            this.openModal(event);
            //delete a note with trash icon
            this.deleteNote(event);
        });

        //Event Listener to clear the form when submitted
        this.$form.addEventListener("save", event =>{
            //to prevent the default event of refreshing when submitted add event
            event.preventDefault();
            //get input from id=note-title and id= note-text
            const title=this.$noteTitle.value;
            const text=this.$noteText.value;
            //conditional to make sure the text in the title or text space
            const hasNote=title || text;
            if(hasnote){
                //add note
                this.addNote({title, text});
            }
        });

        //close form once note added adedd
        this.$formCloseButton.addEventListener("click", event => {
            //allows form to close and over ride isFormClicked method
            event.stopPropagation();
            this.closeForm();
        });

        //close modal when close button is clicked
        this.$modalCloseButton.addEventListener('click', event =>{
            this.closeModal(event);
        })
    }

    handleFormClick(event) {
        const isFormClicked=this.$form.contains(event.target);
        //check to see if user has clicked into the form
        const title= this.$noteTitle.value;
        const text= this.$noteText.value;
        const hasNote= title || text;

        if(isFormClicked){
            this.openForm();
        }else if(hasNote) {
            //if we have a note,add it to the board
            this.addNote({title, text});
        } else {
            this.closeForm();
        }
    }

    openForm() {
        this.$form.classList.add("form-open");
        this.$noteTitle.style.display = "block";
        this.$formButtons.style.display= "block";
    }

    closeForm(){
        this.$form.classList.add("form-open");
        this.$noteTitle.style.display="none";
        this.$formButtons.style.display="none";
        //to clear the form before closing
        this.$noteTitle.value="";
        this.$noteText.value="";
    }

    openModal(event){
        if(event.target.matches('.toolbar-delete')) return;
        //triggered when mouse clicks near note
        if(event.target.closest('.note')){
            //modal will open
            this.$modal.classList.toggle('open-modal');
            this.$modalTitle.value=this.title;
            this.$modalText.value=this.text;
        }
    }

    closeModal(event){
        this.editNote();
        this.$modal.classList.toggle('open-modal');
    }

    addNote({title,text}) {
        //add note data
        const newNote={
            title,
            text,
            color: "white",
            id:this.notes.length > 0 ? this.notes[this.notes.length-1].id + 1 :1
        };
        //add new note to our array along with previous notes
        this.notes=[...this.notes, newNote];
        //display Notes on the screen
        this.render();
        //closes form after entering a note
        this.closeForm();
    }

    editNote(){
        const title=this.$modalTitle.value;
        const text=this.$modalText.value;
        this.notes=this.notes.map(note =>
            //need to convert id from string to number
            note.id===Number(this.id)?{ ...note, title, text} : note
            );
            this.render();
    }

    //open the selected note in modal
    selectNote(event){
        const $selectedNote = event.target.closest('.note');
        if(!$selectedNote) return;
        const [$noteTitle, $noteText]=$selectedNote.children;
        this.text=$noteText.innerText;
        this.id=$selectedNote.dataset.id;
    }

    deleteNote(event){
        event.stopPropagation();
        if(!event.target.matches('.toolbar-delete')) return;
        const id= event.target.dataset.id;
        this.notes=this.notes.filter(note=>note.id !== Number(id));
        this.render();
    }

    render(){
        this.saveNotes();
        this.displayNotes();
    }
    //store note when we refresh
    saveNotes(){
        //JSON.stringify turns note into a string
        localStorage.setItem('notes', JSON.stringify(this.notes))
    }
    displayNotes(){
        const hasNotes=this.notes.length>0;
        this.$placeholder.style.display= hasNotes ? 'none' : 'flex';
        this.$notes.innerHTML=this.notes.map(note =>`
        <div style="background: ${note.color};" class="note" data-id="${note.id}">
            <div class="${note.title && 'note-title'}">${note.title}</div>
            <div class="note-text">${note.text}</div>
            <div class="toolbar-container">
            <div class="toolbar">
                <i class="toolbar-color material-icons" data-id=${note.id}>edit</i>
                <i class="toolbar-delete material-icons" data-id=${note.id}>delete</i>
            </div>
            </div>
        </div>
        `).join("");//adding .join("") will get rid of the commas between our arrays
    }
}

new App();