using Distributions
using JSON

n = 18
p = 0.3
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

outfile = open("./test/fixtures/accessor.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
