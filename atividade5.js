function maior (n1,n2,n3){

    if(n1>n2 && n1>n3)
        return alert("Primeiro número é maior: " + n1);
    else
        if(n2>n1 && n2>n3)
        return alert("Segundo número é maior: " + n2);
        else
            if(n3>n1 && n3>n2)
                return alert("Terceiro número é maior: " + n3);
            else
                if(n1 == n2 && n1 == n3)
                    return alert("Todos números são iguais!");
                else
                    if(n2 == n3)
                        return alert("Segundo e terceiro números são iguais!");
                    else
                        if(n1 == n3)
                            return alert("Primeiro e terceiro números são iguais!");
                        else
                            return alert("Primeiro e Segundo são iguais!");
        
}


