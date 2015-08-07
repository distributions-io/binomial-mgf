using Distributions
using JSON

n = 1
p = 0.5
d = Binomial( n,p )

x = [ -5, -2.5, 0, 2.5, 5 ]

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
