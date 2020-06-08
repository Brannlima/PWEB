function confirmar(){
  var dsc;
  var esc = confirm("Deseja continuar?");

  if(esc == true)
    if(document.getElementById('ads').checked == true)
      window.location.replace('ads.html');
    else
      if(document.getElementById('ea').checked == true)
        window.location.replace('ea.html');
      else
        if(document.getElementById('fm').checked == true)
          window.location.replace('fm.html');
        else
          if(document.getElementById('log').checked == true)
            window.location.replace('log.html');
          else
            if(document.getElementById('ma').checked == true)
              window.location.replace('ma.html');
            else
              if(document.getElementById('pm').checked == true)
                window.location.replace('pm.html');
              else
                if(document.getElementById('pol').checked == true)
                  window.location.replace('pol.html');
                else
                  if(document.getElementById('prj').checked == true)
                    window.location.replace('prj.html');
                  else
                    if(document.getElementById('sbio').checked == true)
                      window.location.replace('sbio.html');
}
