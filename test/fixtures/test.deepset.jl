using Distributions
using JSON

n = 8
p = 0.2
d = Binomial( n,p )

x = linspace( -2, 2, 80 )

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("n", n),
	("p", p),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/deepset.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
