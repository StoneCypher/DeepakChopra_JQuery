(function( $ ) {

    $.fn.choprify = function() {

        var Data = {

          starts     : [ "Experiential truth ", "Coffee ", "The physical world ", "Non-judgment ", "Parsimony ", "Clarity ", "Primacy ", "Apostasy ", "Infinity ", "Calamity ", "Honesty ", "Prosody ", "Selectivity ", "Unity ", "Good health ", "A quantum leap ", "A clean brain ", "Entreaty ", "Brusque temperment ", "A flexible thought pattern ", "Insightful visage ", "Mindfulness in action ", "Automated translation ", "Facebook ", "Compassion ", "Altruism ", "Totality ", "Insoucinace ", "Dynamic mutative creation ", "The graspably non-considerable ", "Social science ", "Stone age philosophy ", "Interpretive dance ", "Meditative physics ", "Rambunctious cause ", "Biology ", "Multitudinality ", "Nascent luminence ", "True randomness ", "Deconstrutionist wisdom ", "Science intersecting religion ", "The role of a leader ", "The soul of a calm person ", "The idea of God ", "Mechanistic reaction ", "Semiotic involvement ", "Quantum physics ", "Cerebrolinguistics ", "Dubstep as a metaphor for liberty " ],
          middles    : [ "nurtures ", "unifies ", "separates ", "distributes widely ", "appreciates ", "deprecates ", "conglomerates ", "gives meaning to ", "displays ", "permeates ", "clarifies ", "asceticizes ", "recapitulates ", "satisfies ", "sanctifies via ", "trivializes ", "justifies with ", "rarifies ", "codifies ", "socializes by way of ", "reclaims ", "disintegrates ", "integrates ", "reduces ", "explores ", "dissociates from within ", "exposes ", "builds, using ", "teaches through ", "projects onto ", "imparts reality to ", "constructs with " ],
          qualifiers : [ "abundance of ", "ostentatious ", "the barrier of ", "self-righteous ", "collective ", "species specific ", "heterodynamic ", "epistemological ", "synchronistic ", "timely ", "unpredictable ", "unassailable ", "dishonest ", "factual ", "highly descriptive ", "location based ", "describably pure ", "bounded ", "unbounded ", "trans-boundary ", "expedient ", "ontogenous ", "geopolitical ", "popular ", "advocatory ", "pluripotentialistic ", "rhythmatic ", "dimensional ", "sophist ", "reliquary ", "escapist ", "anarchist ", "conformist ", "erudite ", "miniscule ", "Manichean ", "Hadrean ", "media driven ", "global ", "local ", "post-", "hyper-", "trans-", "extra-", "super-", "supra-", "world regarding ", "provably optimal ", "potential " ],
          finishes   : [ "marvel.", "choices.", "harmony.", "phylogeny.", "disharmony.", "traversal.", "ostracism.", "semiotics.", "deconstructionism.", "post-logic.", "escapism.", "criarchy.", "platitudinality.", "creosophy.", "journalism.", "preternaturality.", "glossolalia.", "idolatry.", "conscience confluence.", "hapto-ergonomics.", "mental rigor.", "spiritual fortitude.", "wisdom.", "secret genius.", "inner brilliance.", "unseen internal gift.", "combobulation.", "transdoctrinal inference.", "creativity.", "significance.", "materialization.", "generosity.", "infinitude.", "plurality.", "asceticism.", "truism.", "monopoly.", "temerity.", "monosophism.", "polyarchy.", "togetherness.", "voluminous reaction.", "joyous revelation.", "stimulation.", "numbing.", "intuition.", "actions." ]

        };

        function randFrom(X) {
          return X[Math.floor(Math.random() * X.length)];
        }

        function makeDC() {
          return randFrom(Data.starts) + randFrom(Data.middles) + randFrom(Data.qualifiers) + randFrom(Data.finishes);
        }

        return this.each(function() {
            $( this ).html(makeDC());
        });

    };

}( jQuery ));
