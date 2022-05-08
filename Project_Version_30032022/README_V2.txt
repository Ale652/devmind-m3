UML Schema Description :



Admin 
	- should have access to everything


Author 
	- poate avea mai multe carti


Reader 
	- poate avea mai multe carti citite
	- poate avea mai multe carti ce isi doreste sa le citeasca
	- poate lasa mai multe reviewuri


RequestAddingBook
	- stocheaza requesturile de publicare a cartilor
	- daca un id carte prezent in aceasta tabela - cartea nu este inca acceptata de admin ca publicata


Book
	- poate avea mai multe entitati Review  


Review 
	- poate avea o singura entitate Carte
	- poate fii editat/sters de admin
	- poate fii publicat de un reader

