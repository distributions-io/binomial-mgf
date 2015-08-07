using Distributions
using JSON

n = 15
p = 0.4
d = Binomial( n,p )

x = [ -3, -1, 0, 1, 3 ]

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("n", n),
	("p", p),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/partial.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
