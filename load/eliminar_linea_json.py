import json

def eliminar_linea_json(nombre_archivo, numero_linea):
    # Abre el archivo JSON para leer
    with open(nombre_archivo, 'r') as archivo:
        data = json.load(archivo)  # Carga el contenido del JSON

    # Verifica si el índice está dentro de los límites
    if numero_linea - 1 < len(data):
        # Elimina el objeto en la posición especificada (índice basado en cero)
        data.pop(numero_linea - 1)
    else:
        print(f"La línea {numero_linea} no existe en el archivo.")

    # Sobrescribe el archivo JSON con los datos modificados
    with open(nombre_archivo, 'w') as archivo:
        json.dump(data, archivo, indent=4)

# Ejemplo de uso
nombre_archivo = 'movies.json'  # Cambia esto al nombre de tu archivo JSON
numero_linea = 43  # Número de la línea a eliminar (en este caso la entrada 43)

eliminar_linea_json(nombre_archivo, numero_linea)
