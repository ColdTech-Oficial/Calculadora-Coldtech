ax_num1= 0
ax_num2= 0  
ax_num3= 0 
 function calcular() {
        
         ax_num1 = Number(ipt_peso.value)
         ax_num2 = Number(ipt_valor.value *0.70)
         ax_num3= Number(ipt_valor.value*0.90)
         ax_inv = Number(ax_num2-ax_num3)
         ax_real= ax_inv*-1

        mostrar1.innerHTML = `${ax_num1} Kg` 
        mostrar2.innerHTML = `R$${ax_real}`
        mostrar3.innerHTML = `R$${ax_num3}`
        mostrar4.innerHTML = `R$${ax_num2}`
        const labels = [
          '0'
      ];
      
      const data = {
        labels: labels,
        datasets: [{
          label: 'Seu lucro sem nosso serviço',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [ax_num2],
        },
        {
          label: 'Seu lucro com nosso serviço',
          backgroundColor: 'blue',
          borderColor: 'blue',
          data: [ax_num3],
        }
      ]
      };
    
      const config = {
        type: 'bar',
        data: data,
        options: {}
      };
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
        );
      }