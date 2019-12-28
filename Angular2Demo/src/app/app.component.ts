import { Component } from '@angular/core';

//the class AppComponent is decorated with the component decorator to make it an angular component. 
//export allows this class to be discoverable so other components in our project can import it. 
// template code must be inside the back tick character. 
// the double curly braces is called data binding. 
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    name: string = 'Employee Details';
    imagePath: string = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsApAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABwQFBggDAgH/xABNEAABAwICAwoLAwcMAwEAAAABAgMEAAUGEQcSIRMXIjFBUVRhlNIUFjZVcXSBkZOy0QgyoTVCUoKSorMVIzdTYmRyc3WxweEzNMIm/8QAGgEBAQADAQEAAAAAAAAAAAAAAAECAwUEBv/EACMRAAIDAAICAgMBAQAAAAAAAAABAgMRBBIUITFREyNBgXH/2gAMAwEAAhEDEQA/ANFibEUTDUFuZObfcbcdDQDCQTmQTykbOCazW+vYuiXP4SO/X5plGeGofryPkXSf1TXuoohOGswbwcO+vYuiXP4SO/Rvr2Lolz+Ejv0ntU0aprb4tZOw4d9exdEufwkd+jfXsXRLn8JHfpPapo1TTxax2HDvr2Lolz+Ejv0b69i6Jc/hI79J7VNGqaviVjsxw769i6Jc/hI79G+vYuiXP4SO/Se1TRqmp4tY7Dh317F0S5/CR36N9exdEufwkd+k9qmjVNXxax2HDvr2Lolz+Ejv0b69i6Jc/hI79J7VNGqani1jsOHfXsXRLn8JHfo317F0S5/CR36T2qaNU08Wsdhw769i6Jc/hI79G+vYuiXP4SO/Se1TRqmr4lY7Dh317F0S5/CR3694Gk2yzp0aG1GuKXJDqWkFTaAAVEAZ8Li20l9U1ZYaT/8ApLRn05j5xWL4sEmOx0XtooornGZhdMA1sOQ/XU/w3KUu504NK6NewRRzTE/IulduPVXV4i/UaLJY8NToz0fHF770qY8ti1xl6i1NZBbq8gdUZ8QAIJPWPYxZVr0UWJ42+c1bUyEcFaXFLdWk/wBojPI+nKvfQbNYcwo7ASQJUWSsuJ4ioK2pV6OT9WlzjHR5fLNNkyUxnJ0Fbq3EyGElagCc+GkbQdu08XLnWl/stcZSzDPcjqPvSnbsGxI9udwjuC3ZC1lwxpBcQlCQNhGZyJJHuNL7c+qp248oGdG417a6+kc3TU56QQ0pRySkqUdiUjlPNXQ9p0V4UZtsBm6QEuz1MJDyy8sFbgSNcgZ8+dKvRxZBd8Z21hac2mF+Eug/ooyI/e1R7aZuNsS/ydpLw3HDpSxHB8IHId24Az9GQPury8ns5KEf+myDWaxQY/w8nDuLp9vYTqxgoORwTn/NqGY9xzHsrPbmeanZp6swWLZeUI2pJiukDkOakk+5XvpQ7jW/jy71pmM3ksNNosg4eud+VasRww74UnKK4XFJycGZKTkeUcXWOurHTBgaJhqTCnWdktW6QNyUjWKgh0Akce3aM/2TWLbS4y4h1lam3W1BaFpORSobQRXQMZ6PpJ0eOtOaiJa2yhY49xkJ2pVlzZ5H0GtN3aqxT/n9LCSksFFopwc1ii/uKntldtht674BI11KzCE5j0E+zrr70r23D9ovbVqw9CSyuOjOU4HFKzUraEbTyDaf8VNa0RmNGujxT0tKVTAndHkg57pIXsCAeYbB6ATSEkqelyXpUpwuPvrU46s8alE5k1attsc99ISkorCs3OmVo60WKxDFRdr267Gty9rLTWxx8fpEnPVT+J6uOshZbX/Kd5gW/LgypLbSiORJUAT7BmaeelucqzYHVEt53AyFoio1Nmq3lmQObgpI9tXkTkmoR+WINNaymXB0QRHfAXVW4uJ4BUXXF5Hi2rBy/GqrGOiOEu2quuDXlOjV3TwQubolxPH/ADauPPqJOfVStDGQyHFTk0C3J5UO5Wd1WszGKHmB+iF62sn0ZjP9Y1rsqnTHvGTeFjNSeCN3M8o/CrDDqMsRWn15j+ImtPpOszVqxtcGo6dVp8iSlI5Nfaf3gqqSws5X61nmmM/OK9SfeHb7RhuPB8UUUVxD0GS0lI17LGH96HyLpc+D9VNDHSN0tTA/vI+VVYfwbqrtcGO0o8HInkyHapc20TUTLZIcjvo4lIPGOUEcRHUaZuHNKhccbj4ghpb1iEmVHz1R1qSeIegmqrD+j9692UT0zER3FuKDaFt5hSRy58m3Pk5KmRNFU5b4TPmREx8+HuJUpShygZpGXvNY3PjT1SftFg7VjiTdK+EoLlqcv0BlDUppSS/uYyDyVEJ1iOcZg582fHspReD9VPHSXdY8awGzsLCpEjUSUA5ltsEHM+nLL20pTG2E1lwVJ1bInImlP0MDQlZ9yZuN1cTtcUmO0eobVe8lPuqkxbgvFd8xFcp4tai288QyfCWv/GOCk/e2bAD7aYsFvxUwGMkhLzEYrOf9arbt/WOVLYYvxVl+WnfgM9ytFKttsnZXn17Nk5whFRkMnElslX3AT0WaxqTzEDhbKgdV5IzyzGzjGXtrn4R8xnlT40b3yZdrfKbucgvymHRwylKSUEbNiQBxg0tMU2b+TMQToqU5Nh0rb/wq4Q92eXsrPhpwslVL5MbppxU0ZIsZAnip34DtjWDcFvXC4AtuuoMqQnlSAOCnLnyy9prFYFw4LxfWy+3rRI2Tr2fEr9FPtP4A1p9LF2LiWLKwrYSHpGR/ZSf9/YKvJ/bYqI/6SqXWDsZcYihs48wMHIWx1xAkRwSM0uJ40H95NIcxiCQpJBB2gjaDzGmzooupjvvWd9WSHSXY/Ur84e0bfYarNJWHRBvXh8dGUWadY5D7rv53v4/fU46/Dc6X8P4LZLvBWIx2EyImKbQ+ocFMxoE8wKgM/wAaaemqMp/DEZY4mZiVK9qVJ/5pXCOQQRmCDmCOQ05LROg41wwu3z1ASS2ESGx94KHEtPtAIq8uDhZC3+IlM1JOP9EH4P1UzNB0ZSLjdnsuCGW0Z9ZKj/xXy9otvKZBQzIgrZz2OLWpJy606py99bS2Q7dgHDq93e3RxRK1q2BTy+RKR+H4mseTdCdfSD1syqjJS2XpIWml0pk42d1Nu5RmmlenhK/+qzNkYyvVvOXFKaP74q0uTj1zuEidJ2uvuFasuIZ8QHUBsr9tUfK6QjlxSGz+8K9canCrq/4jQ7e0/Q0aKKK+fOmVGJWt2gtJ5nQfwNZzwE81aHFV2gWaA3IubikMreCAUoKuFkTxDqBrLePWGOlPdnV9K6fF5Ea6+rZzuTVOVmpFnCduED/0pb7Azz1UOED3cVTHb1fXUai7k/kf0SEn3gVQePWGOlPdnV9KPHrDHSnuzq+lbXyKW9eGpV3pYtJK4alqKlkqUo5kqOZJ9NfngRBzA21H8esMdKe7Or6UePWGOlPdnV9Kz8yH2Yfgt+i2lyrnMYLEua+8yciULXmDlxVB8BPNUfx6wx0p7s6vpR49YY6U92dX0qLlVR+MK6bX7aZYQjMgLUuE+4wpYyUUHLMV+TEyZz27THVvO5auss5nLm/GoHj1hjpT3Z1fSjx6wx0p7s6vpU8qrd9aPw25mMsoTk6AlSYUl1gLOag2rLM14yI70l9b8hanHVnNS1nMmofj1hjpT3Z1fSjx6wx0p7s6vpV8qvd1aPw2/GMlsxnWHkPMKU24g5pWk5EGpMx+4zWg1MlvPNg56ri8xnz1V+PWGOlPdnV9KPHrDHSnuzq+lHyqm9eBU2r1jJHgJ5q+2ozrLqXWVrbcT91aFFKh6CKiePWGOlPdnV9KPHrDHSnuzq+lV8yD9aT8Fv0aFN8vyUaguT2XXkT78qrJbcma6XZbzjzh2aziiT/1UHx6wx0p7s6vpR49YY6U92dX0rCPIpi9WGTrufymSPATzV7QYerNjqy4nUn8RUHx6wx0p7s6vpXvAxphyTPix2JDxddeQhALChmSQBtrKXMg0/YjRZq9G7ooyy2UVxTri/01eTEP19HyOUmzTk01eS8P15HyOUm+WoU/KKd2hbBmHsQYSemXi2NSpImrbDi1KzCQlGQ2HrNe5e0N/wAoOW9+EiO6l0sqU628lIUDq/eGwbeU5DroBFUU5tJ+im3WmyPXvDSnUNxwFPxVLLg1NnCSo7dmee0nZSaoD8oyr6bbW6tLbaSpaiEpA5SdgFdN2jRhhGLbLfFuVrjvTywkOuKUoF1wJGucs+fOgOYqK1OkvD6MNYynwIze5xCQ7GTnxNqGeXsOY9lZagCimToRw5aMR3i5s3uGmU2zGSttKlEZEqyz2GthpQ0aWSPhJ+5YZgojyIKi67qKUrXbTmFjaeTj/VNAIajKrLDUdmZiS0xZKA4w/NZbcQfzkqWAR7jTQ044SsOHbRbHrLbmorrslSFqQTwk6pOW00AnaKKfmifBOG71gOJPudpYkS1reCnV55nJagOXmyoBB0V7QosifJYiRGlPSHlBDbaBmVqPEKezOBsJ4GwV4fjKI1Omgay9pJU4eJpsZ+zP0nYOIBB1Z4X8p7P68x84qJcJDcqc/IZjNxWnVlSGG89VsHiSM+apeGPKezevsfOKA6SoooqkF/pq8l4fryPkcpN8tOTTV5Lw/XkfI5Sb5ahToz7PPkNIz84u/Iili7o4xTfMVTkNWp+NHdmukypKdRCUFZ4Qz2n2Z0zvs8jPAsj/AFF35EVjLjplxNbcQzYxZgPxo8txoNlopJSlRA4QPHsoDV6WMU22wYMOF4UsSbi9HRF1QoKLbYyClL5iQMh1mueq6en4fsGk7CMe5iGiNKkta7MhKQHGnOIgkfeGYIIPp2VzK604w84y8nVcbUULTzEHI0BrtEllF7x5bWlp1moqvC3PQjIj97VFNPSBi0WvSthaIlwhmOD4Tt2fz/A2+gAH3VC+znZS1brne3U7ZC0x2SRxJRtUfaSB+rVHjjRtjPEmK7ndEQ4+4vvEM68pOYbHBRs5NgBy66At/tG2UKjWu+Np4TazEdOXIc1J9xCvfSMrq7FNml4g0cSbfcGki5LhBakBesA+gBQ2jj4Q4+uuUfTsPKKAb/2cPy9ePVEfPTGw1fEv44xXhiXkrc3EyWUq4lNrbQFp95B/WNLn7OH5fvHqiPnqtxtfXcNabpl2Zzyjvs7qkfntllAWn2jP8KAq5+HVYW0sQLZkdwFzjuxlH85pToKfdtHpFMT7SH5BtHravkNXWkmzMXhOGsTwTungM6M4VoGeuwtxG32HI+gmqX7SH5BtHravkNAIKunNCP8ARpC/zH/4iq5jrpzQgctGkEj+sf8A4iqApNF+DYmCLG7irE5SzM3AqycH/qtZcWX6Z9+3IctKnSHjWXjO8GQsKZgs5piRifuJ51f2jy+6nHga/W/Sdgx+y34BU5psIkjYFL/ReTzHP3EcxFI3GGGZ2E729bLgM9XhMvAZJeRyKH/I5DQFHVnhjyns3r7HziqyrPDHlPZvX2PnFAdJUUUVSC/01eS8P15HyOUm+WnJpq8l4fryPkcpNmoU6M+zz5CyP9Rc+RFZOfoVxBc7/OlOzoEeLJlOOhWspakpUskcHIbcjz0srZiO92mOY9su0yKypZWW2XSlOseM5ewVKXjTFC0lKsQXIgjIjwhVAdFXG6WXRlg6PDU+FLjs6kZgkbpIXz5DizOZJ4hXLb7zj77r7x1nXFFazzqJzP40PvvSXlvSXXHnl/fccUVKV6Sdpr5SpSFpWhRSpJzBHGDz0B1C0kaPtE+whEiFBKs1cshe351UihpMxpl5QSf2Ed2qa4YlvtzjGLcLvNkxyQS068VJJHFsqqoDpLQji2diWzz2bvKMmdEfB1yAFFtQ2Z5dYV+FJLSPZhYcbXWChJSzu26sjLZqL4Qy9GeXsqotd4uVoW4u1zpERbidVamHCkqHMcq+Llc512kiTc5b0p8JCA48sqOqOIZ+00A1Ps4fl+8eqI+esrpl/pLvX+Jn+C3WXtd3uVodW7ap0iI44nVWplZSVDmNeM6ZKuEpyXOkOSJDmWu66rWUrIZDM+gCgH/oNvqL9hKRh+crWdgDUTt2qZVnq/snMdWyo32j/wAgWj1xXyGkbb7lOtj5ftst+K8UlJWysoJHNs5Nletyvd1uqEIudylS0IOaEvulYSecZ0BX105oR/o0g/5j/wDEVXMdWcHEN7t0URYF2mx44JIaaeUlIz49lAfuGb7Nw3eI10ty9V5k7Uk7HE8qVdR/7roe+Wu0aWcEsTIRCJASpUV1Q4TDo2KbV1EjI8+wjkrmSrC23u7WpC27ZcpcRDhBWlh0pCiOU5UB4XKDKtk9+DPZUzJjrLbjah90j/cdfLUrDHlPZvX2PnFRZ8+ZcpBk3CU9JfICS48sqUQOLaalYY8p7N6+x84oDpKiiiqQx2lCy3C+2GNFtUfwh5EtLik66U5JCVjPNRA4yKWe97izzQe0td6n7RQCC3vcWeaD2lrvUb3uLPNB7S13qftFQogt73Fnmg9pa71G97izzQe0td6n7RQCC3vcWeaD2lrvUb3uLPNB7S13qftFAILe9xZ5oPaWu9Rve4s80HtLXep+0UAgt73Fnmg9pa71G97izzQe0td6n7RQCC3vcWeaD2lrvUb3uLPNB7S13qftFAILe9xZ5oPaWu9Rve4s80HtLXep+0UAgt73Fnmg9pa71G97izzQe0td6n7RQCC3vcWeaD2lrvVOsOBMTxL7bZMm1lDLEtpxxXhDRySFgk5BXNTvooAoooqkP//Z";

}
