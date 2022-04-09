<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<html>
<head>
		<title>Home</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
		<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
		<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
		<script>
			$(function () {
				$("#datepicker").datepicker();
			});
		</script>


</head>
<body>
	<h1>Bine ai venit in lumea Spring MVC!</h1>

	<P>Timpul pe server este: ${serverTime}.</p>

<%--	acesta este un action form care inregistreaza un user name--%>
	<form action="user" method="post">
		<input type="text" name="userName"><br>
		<input type="text" name="email"><br>
		<input type="text" name="phone"><br>
		<input type="text" id="datepicker" name="birthDate"><br>
		<input type="submit" value="Login">
	</form>
</body>
</html>