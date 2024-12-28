# Datos
dinero_invertido = 60  # dólares
precio_compra = 0.3392  # precio por moneda en dólares
precio_venta = 0.3412  # precio de venta por moneda en dólares

# Cantidad de monedas compradas
cantidad_monedas = dinero_invertido / precio_compra

# Dinero obtenido al vender
dinero_obtenido = cantidad_monedas * precio_venta

# Ganancia
ganancia = dinero_obtenido - dinero_invertido
print(f'La ganancia obtenida es de {ganancia} dólares')