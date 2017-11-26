
class DiracConet{

  dictionary = {
    "I": { wordClass: "pronoun"},
    "am": { wordClass: "verb", concept: "be"},

    "man": { wordClass: "noun", concept: "male" },
    "male": { wordClass: "noun", concept: "male" },
    "woman": { wordClass: "noun", concept: "female" },
    "female": { wordClass: "noun", concept: "female" },

    "gender": { wordClass: "noun", concept: "gender" },
    "sex": { wordClass: "noun", concept: "gender" }
  }

  conceptMap = {

    "dirac": [],

    "user": [],

    "gender": {"type": "attribute_class", "children": ["male", "female"]},
    "male": {"type": "attribute_instance", "class": "gender"},
    "female": {"type": "attribute_instance", "class": "gender"}
  }

}

export default DiracConet