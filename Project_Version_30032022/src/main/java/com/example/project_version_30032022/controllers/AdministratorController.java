package com.example.project_version_30032022.controllers;

public class AdministratorController {


    /*
* Poate vedea o lista cu toate cartile din aplicatie
    Lista poate fi filtrata dupa tipul cartii (Comic Book, Fantasy, Classics, Historical Fiction etc.)
* */
    public void showAllBooks(){}  //TODO: This method is duplicated for the other controllers Admin/Author/Reader

    /*
    *     Poate aproba / respinge o cerere de adaugare a unei carti venita de la un Author
     * */
    public void AcceptRejectAddingABook(){}

    /*
    *     Poate adauga titlul unei noi carti, impreuna cu o descriere, fara sa fie nevoie de aprobarea altui Administrator
     * */
    public void addNewBook(){}

    /*
    *     Poate sterge review-urile care nu respecta regulile de conduita ale platformei
     * */
    public void removeReview(){}
    /*
    *     [EXTRA] Poate bloca utilizatorii care nu respecta regulile de conduita ale platformei
     * */
    public void blockUser(){}

    /*
     *  [EXTRA] Poate incarca o poza de profil (avatar)ss
     * */
    public void uploadAvatarPicture(){} //TODO: This method is duplicated for the other controllers Admin/Author/Reader

}
