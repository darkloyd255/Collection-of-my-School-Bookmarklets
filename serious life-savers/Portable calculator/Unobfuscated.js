function createCalculatorWindow() {
  // Open a new window with the calculator
  const calculatorWindow = window.open("", "calculatorWindow", "width=300,height=400");

  // Write the HTML for the calculator to the new window
  calculatorWindow.document.write(`
    <html>
      <head>
        <title>Calculator</title>
        <style>
          /* Add some basic styles */
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
          }
          input[type="button"] {
            width: 50px;
            height: 50px;
            font-size: 24px;
            margin: 5px;
            border: none;
            background-color: #f2f2f2;
          }
          input[type="text"] {
            width: 100%;
            height: 50px;
            font-size: 24px;
            padding: 5px;
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <input type="text" id="result" readonly>
        <input type="button" value="1" onclick="appendToResult('1')">
        <input type="button" value="2" onclick="appendToResult('2')">
        <input type="button" value="3" onclick="appendToResult('3')">
        <input type="button" value="+" onclick="appendToResult('+')">
        <br>
        <input type="button" value="4" onclick="appendToResult('4')">
        <input type="button" value="5" onclick="appendToResult('5')">
        <input type="button" value="6" onclick="appendToResult('6')">
        <input type="button" value="-" onclick="appendToResult('-')">
        <br>
        <input type="button" value="7" onclick="appendToResult('7')">
        <input type="button" value="8" onclick="appendToResult('8')">
        <input type="button" value="9" onclick="appendToResult('9')">
        <input type="button" value="*" onclick="appendToResult('*')">
        <br>
        <input type="button" value="0" onclick="appendToResult('0')">
        <input type="button" value="C" onclick="clearResult()">
        <input type="button" value="/" onclick="appendToResult('/')">
        <input type="button" value="=" onclick="calculateResult()">
        <script>
          function appendToResult(value) {
            document.getElementById("result").value += value;
          }
          function clearResult() {
            document.getElementById("result").value = "";
          }
          function calculateResult() {
            const result = eval(document.getElementById("result").value);
            document.getElementById("result").value = result;
          }
        </script>
      </body>
    </html>
  `);
}

// Call the function to create the calculator window when the page loads
window.onload = createCalculatorWindow;
createCalculatorWindow()

