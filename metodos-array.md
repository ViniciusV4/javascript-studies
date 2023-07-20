<h1>Os principais métodos para a aprendizagem são:</h1>
<ul>
    <ul>
        <h2>concat()</h2>
        <p>Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.</p>
        <p>Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.</p>
    </ul>
     <ul>
        <h2>filter()</h2>
        <p>Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.</p>
        <p>Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.</p>
    </ul>
     <ul>
        <h2>find()</h2>
        <p>Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.</p>
    </ul>
     <ul>
        <h2>findIndex()</h2>
        <p>Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.</p>
    </ul>
     <ul>
        <h2>lastIndexOf()</h2>
        <p>É igual o findIndex() porém começa do último elemento, não no primeiro.</p>
    </ul>
     <ul>
        <h2>forEach()</h2>
        <p>Executa uma função em cada elemento do array de forma individual.</p>
        <p>Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida</p>
    </ul>
     <ul>
        <h2>pop()</h2>
        <p>Retira o último elemento do array.</p>
        <p>Altera o array original removendo o elemento.</p>
    </ul>
     <ul>
        <h2>shift()</h2>
        <p>Retira o primeiro elemento do array.</p>
        <p>Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.</p>
    </ul>
     <ul>
        <h2>push()</h2>
        <p>Adiciona o elemento passado como parâmetro do array, porém na última posição.</p>
        <p>Altera o array original com o novo valor.</p>
    </ul>
     <ul>
        <h2>unshift()</h2>
        <p>Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.</p>
        <p>Altera o array original com o novo valor.</p>
    </ul>
     <ul>
        <h2>reduce()</h2>
        <p>Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.</p>
    </ul>
     <ul>
        <h2>reduceRight()</h2>
        <p>Funciona igual o reduce() porém começa do final do array e segue até o início.</p>
    </ul>
     <ul>
        <h2>reverse()</h2>
        <p>Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.</p>
    </ul>
     <ul>
        <h2>slice()</h2>
        <p>Copia uma parte do array para outro array.</p>
    </ul>
     <ul>
        <h2>sort()</h2>
        <p>Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.</p>
    </ul>
     <ul>
        <h2>splice()</h2>
        <p>Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.</p>
    </ul>
 </ul>