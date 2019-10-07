const express = require('express')

module.exports = function(server) {
    // Definir URL para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // Rotas de ciclo de pagamento
    const BillingCycler = require('../api/billingCycle/billingCycleService')
    BillingCycler.register(router, '/billingCycles')
}