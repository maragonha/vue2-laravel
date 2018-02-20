<template lang="html">
  <div class="row">
    <div class="content-header">
      <h1>Contas bancárias <small>Gerenciamento de contas</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">iFinance</a> >
          <span>Suas contas</span>
        </small>
      </div>
    </div>

    <div class="card col s12">

      Contas: {{ accounts }}


      <div class="card-content">
        <table class="highlight">
          <thead>
            <tr>
              <th>contas</th>
            </tr>
          </thead>
          <tbody>
            <tr @click="goTo(1)">
              <td class="valign-wrapper">
                Conte título &nbsp;
                <small>agência: 000 / conta: 0000 / código do banco:000</small>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-action">
        <a href="#/contas/cadastrar">Nova conta</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accounts',
  methods: {
    goTo: function (id) {
      this.$router.push('/contas/' + id)
    }
  },
  computed: {
    accounts () {
      return this.$store.state.account.accountList
    }
  },
  created () {
    this.$store.dispatch('getAccounts')
  }
}
</script>

<style lang="css">
tr {
  cursor: pointer;
}
</style>
