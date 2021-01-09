# Analyse des données d'Avila

Projet - Python for datanalysis

ESILV - 2020/2021 - DIA - A4

Groupe :
- RAKOTOARISOA Riana Cédric
- QOTB Badr

## Description

La Bible d'Avila est un manuscrit du XIIe siècle dont les origines remontent à la région ombro romaine d'Italie.

C’est un codex de grandes dimensions qui contient l'Ancien et le Nouveau Testament.

## Installation

|       |version|
|:-     |:-     |
|python |3.8.1  |
|pip    |20.0.2 |

Afin de lancer l'application flask il est necessaire de se créer un environement virtuel puis d'installer les dépendance requise présente dans le fichier requirements.txt

```bash
pip install -r requirements.txt
```

Le lancement de l'application se fait par la commande suivante :

```bash
python app.py
```

## Fonctionnement

Une fois sur l'interface web de l'application il suffit de faire varier les différents "slider" pour avoir une prédiction

## Conclusion de l'analyse

Nous avons pu identifier que seulement un certain nombre des attributs pouvais être nécéssaire afin d'identifier les différents copistes : l'espacement inter-colonne, la marge supérieur et inférieur, le nombre de lignes et l'espacement interligne.

Pour l'ensemble des données nous avons ainsi distinguer le modèle "Random forest" comme étant la plus performante pour classifier chaque copsite. Nous obtenons un score de precision de 99,8% avec ce modèle.