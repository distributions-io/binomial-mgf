using Distributions
using JSON

n = 3
p = 0.2
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

outfile = open("./test/fixtures/number.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
