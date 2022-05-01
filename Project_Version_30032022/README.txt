User Type 
	- poate avea un singur administrator
	- poate avea mai multe entitati Author
	- poate avea mai multe entitati Reader
	- poate avea mai multe requesturi de publicare carti


Admin 
	- poate avea un UserType


Author 
	- poate avea un UserType
	- poate avea mai multe carti


Reader 
	- poate avea un UserType
	- poate avea mai multe carti citite
	- poate avea mai multe carti ce isi doreste sa le citeasca
	- poate lasa mai multe reviewuri


RequestAddingBook
	- poate avea un singur Administrator care le Aproba
	- poate avea un singura entitate Auhtor care face requestul pentru publicare catre Administrare


Book
	- poate avea mai multe entitati Review  
	- poate avea un request de publicare 


Review 
	- poate avea o singura entitate Review 
	- poate avea o carte ceruta spre publicare catre Admin

