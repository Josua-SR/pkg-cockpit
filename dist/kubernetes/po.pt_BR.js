(function (root, data) {
    var loaded, module;

    /* Load into AMD if desired */
    if (typeof define === 'function' && define.amd) {
        define(data);
        loaded = true;
    }

    /* Load into Cockpit locale */
    if (typeof cockpit === 'object') {
        cockpit.locale(data)
        loaded = true;
    }

    function transformAngular(data, prev) {
        var key, context, parts, value, result = { };
        for (key in data) {
            if (key === "")
                continue;
            parts = key.split("\u0004");
            value = data[key];
            if (parts[1]) {
                context = parts[0];
                key = parts[1];
            } else {
                context = "$$noContext";
                key = parts[0];
            }
            if (value[0] === null)
                value = value[1];
            else
                value = value.slice(1);
            if (!(key in result))
                result[key] = { };
            result[key][context] = value;
        }
        return angular.extend(prev, result);
    }

    /* Load into angular here */
    if (typeof angular === 'object') {
        try {
            module = angular.module(["gettext"]);
        } catch(ex) { console.log(ex); /* Either no angular or angular-gettext */ };
        if (module) {
            loaded = true;
            module.run(['gettextCatalog', function(gettextCatalog) {
                var lang = data[""]["language"];
                var prev = (gettextCatalog.getCurrentLanguage() == lang) ? gettextCatalog.strings : { };
                gettextCatalog.setStrings(lang, transformAngular(data, prev));
                gettextCatalog.setCurrentLanguage(lang);
            }]);
        }
    }

    if (!loaded)
        root.po = data;

/* The syntax of this line is important  by po2json */
}(this, {
 "": {'plural-forms':function(n) {
var nplurals, plural;
nplurals=2; plural=(n != 1);
return plural;
},
  "language": "pt-BR",
  "x-generator": "Zanata 3.9.6"
 },
 " 1\"Do you want to delete the following Nodes?": [
  null,
  "1 \"Deseja excluir os seguintes nós?"
 ],
 " or drag & drop.": [
  null,
  ""
 ],
 "$0% Free": [
  "$0% Free",
  "$0% Livre",
  "$0% Livres"
 ],
 "$0% Used": [
  "$0% Used",
  "$0% Usado",
  "$0% Usados"
 ],
 "AWS Elastic Block Store": [
  null,
  "AWS Loja de Blocos Elásticos"
 ],
 "Access Modes": [
  null,
  "Modos de Acesso"
 ],
 "Access Policy": [
  null,
  "Política de Acesso"
 ],
 "Actual": [
  null,
  "Atual"
 ],
 "Add": [
  null,
  "Adicionar"
 ],
 "Add Cluster Node": [
  null,
  "Adicionar Nó de Cluster"
 ],
 "Add Group": [
  null,
  "Adicionar Grupo"
 ],
 "Add Kubernetes Node": [
  null,
  "Adicionar Nó Kubernetes"
 ],
 "Add Member": [
  null,
  "Adicionar Membro"
 ],
 "Add Membership": [
  null,
  "Adicionar Associação"
 ],
 "Add New Cluster": [
  null,
  "Adicionar Novo Cluster"
 ],
 "Add New User": [
  null,
  "Adicionar Novo Usuário"
 ],
 "Add Role": [
  null,
  "Adicionar Função"
 ],
 "Add User": [
  null,
  "Adicionar Usuário"
 ],
 "Add membership": [
  null,
  "Adicionar associação"
 ],
 "Address": [
  null,
  "Endereço"
 ],
 "Addresses": [
  null,
  "Endereços"
 ],
 "Adjust": [
  null,
  "Ajustar"
 ],
 "Adjust Persistent Volume '{{ item.metadata.name }}'": [
  null,
  "Ajustar Volume Persistente '{{ item.metadata.name }}'"
 ],
 "Adjust Replication Controller {{ item.metadata.name }}": [
  null,
  "Ajustar o Controlador de Replicação {{ item.metadata.name }}"
 ],
 "Adjust Route": [
  null,
  "Ajustar Rota"
 ],
 "Adjust Service": [
  null,
  "Ajuste de serviço"
 ],
 "Admin": [
  null,
  "Admin"
 ],
 "All Projects": [
  null,
  "Todos os Projetos"
 ],
 "All Types": [
  null,
  "Todos os Tipos"
 ],
 "All healthy": [
  null,
  "Tudo saudável"
 ],
 "All images": [
  null,
  "Todas as imagens"
 ],
 "All in use": [
  null,
  "Tudo em uso"
 ],
 "All running": [
  null,
  "Tudo executando"
 ],
 "Annotations": [
  null,
  "Anotações"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  "Anônimo: permitir que todos os usuários não autenticados baixem imagens"
 ],
 "Authentication": [
  null,
  "Autenticação"
 ],
 "Azure": [
  null,
  "Azure"
 ],
 "Boot ID": [
  null,
  "ID de Boot"
 ],
 "Bus": [
  null,
  "Bus"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU Utilization: $0%": [
  null,
  "Utilização da CPU: $0%"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Capacity": [
  null,
  "Capacidade"
 ],
 "Ceph Filesystem Mount": [
  null,
  "Sistema de Arquivos de Montagem Ceph"
 ],
 "Ceph Monitors": [
  null,
  "Monitores Ceph"
 ],
 "Change": [
  null,
  "Alterar"
 ],
 "Change User": [
  null,
  "Alterar Usuário"
 ],
 "Change image stream": [
  null,
  "Alterar stream de imagem"
 ],
 "Change project": [
  null,
  "Alterar projeto"
 ],
 "Cinder": [
  null,
  "Cinzas"
 ],
 "Claim": [
  null,
  "Reivindicar"
 ],
 "Claim Name": [
  null,
  "Nome da reivindicação"
 ],
 "Client Certificate": [
  null,
  "Certificado de Cliente"
 ],
 "Cluster": [
  null,
  "Cluster"
 ],
 "Configuration": [
  null,
  "Configuração"
 ],
 "Configure Flannel networking": [
  null,
  "Configurar rede de Flanela"
 ],
 "Configure Kubelet and Proxy": [
  null,
  "Configurar Kubelet e o Proxy"
 ],
 "Connect": [
  null,
  "Conectar"
 ],
 "Connecting...": [
  null,
  "Conectando..."
 ],
 "Connection Error": [
  null,
  "Erro de Conexão"
 ],
 "Connection Error: $0": [
  null,
  "Erro de Conexão: $0"
 ],
 "Connection Settings": [
  null,
  "Configurações de Conexão"
 ],
 "Container": [
  null,
  "Container"
 ],
 "Container ID": [
  null,
  "ID do Contêiner"
 ],
 "Container Runtime Version": [
  null,
  "Versão de Tempo de Execução do Contêiner"
 ],
 "Containers": [
  null,
  "Containers"
 ],
 "Could not list services": [
  null,
  "Não foi possível listar serviços"
 ],
 "Couldn't connect to server": [
  null,
  "Não foi possível conectar ao servidor"
 ],
 "Couldn't find running API server": [
  null,
  "Não foi possível localizar o servidor API em execução"
 ],
 "Count:": [
  null,
  "Contagem:"
 ],
 "Create": [
  null,
  "Criar"
 ],
 "Create Virtual Machine": [
  null,
  ""
 ],
 "Create empty image stream": [
  null,
  "Criar um stream de imagem vazio"
 ],
 "Create image stream": [
  null,
  "Criar Stream de Imagem"
 ],
 "Created": [
  null,
  "Criado"
 ],
 "DNS Policy": [
  null,
  "Política de DNS"
 ],
 "Delete": [
  null,
  "Excluir"
 ],
 "Delete Node": [
  null,
  "Deletar Nó"
 ],
 "Delete Persistent Volume": [
  null,
  "Deletar Volume Persistente"
 ],
 "Delete Persistent Volume Claim": [
  null,
  "Deletar Declaração de Volume Persistente"
 ],
 "Delete Project": [
  null,
  "Deletar Projeto"
 ],
 "Delete Selected": [
  null,
  "Deletar o Selecionado"
 ],
 "Delete image stream": [
  null,
  "Deletar stream de imagem"
 ],
 "Delete {{ item.kind }}": [
  null,
  "Excluir {{ item.kind }}"
 ],
 "Deleting a Pod will kill all associated containers. Pods may be automatically created again in some cases.": [
  null,
  "Excluir um Pod irá matar todos os contêineres associados. Pods podem ser automaticamente criados novamente em alguns casos."
 ],
 "Deploy": [
  null,
  "Implantar"
 ],
 "Deploy Application": [
  null,
  "Implantar aplicativo"
 ],
 "Deployment Causes": [
  null,
  "Causas de Implantação"
 ],
 "Deployment Config": [
  null,
  "Config de Implantação"
 ],
 "Deployment Configs": [
  null,
  "Configs de Implantação"
 ],
 "Description": [
  null,
  "Descrição"
 ],
 "Details": [
  null,
  "Detalhes"
 ],
 "Device": [
  null,
  "Dispositivo"
 ],
 "Directory": [
  null,
  "Diretório"
 ],
 "Disk": [
  null,
  "Disco"
 ],
 "Disk Utilization: $0%": [
  null,
  "Utilização do disco: $0%"
 ],
 "Disks": [
  null,
  "Discos"
 ],
 "Display name": [
  null,
  "Nome exibido"
 ],
 "Do you want to add the role '{{ fields.displayRole }}'?": [
  null,
  "Deseja adicionar a função '{{ fields.displayRole }}'?"
 ],
 "Do you want to delete the '{{stream.metadata.namespace}}/{{stream.metadata.name}}' image stream?": [
  null,
  "Deseja deletar o stream de imagem '{{stream.metadata.namespace}}/{{stream.metadata.name}}'?"
 ],
 "Do you want to delete the Persistent Volume '{{item.metadata.name}}'?": [
  null,
  "Deseja deletar o Volume Persistente '{{item.metadata.name}}'?"
 ],
 "Do you want to delete the Persistent Volume Claim '{{item.metadata.name}}'?": [
  null,
  "Deseja excluir a declaração de volume persistente '{{item.metadata.name}}'?"
 ],
 "Do you want to delete the {{ item.kind }} '{{item.metadata.name}}'?": [
  null,
  "Deseja excluir o {{ item.kind }} '{{item.metadata.name}}'?"
 ],
 "Do you want to delete this Node?": [
  null,
  "Deseja excluir este Nó?"
 ],
 "Do you want to remove the image tagged as '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?": [
  null,
  "Deseja remover a imagem marcada como '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?"
 ],
 "Do you want to remove the role '{{ fields.displayRole }}' from member {{ fields.member.metadata.name }}?": [
  null,
  "Deseja remover a função '{{ fields.displayRole }}' from member {{ fields.member.metadata.name }}?"
 ],
 "Don't pull images automatically": [
  null,
  "Não baixe imagens automaticamente"
 ],
 "Driver": [
  null,
  "Driver"
 ],
 "Drop file here to upload.": [
  null,
  ""
 ],
 "Empty Directory": [
  null,
  "Diretório Vazio"
 ],
 "Endpoint": [
  null,
  "Ponto final"
 ],
 "Endpoint Name": [
  null,
  "Nome do Ponto de extremidade"
 ],
 "Endpoints": [
  null,
  "Pontos finais"
 ],
 "Environment": [
  null,
  "Ambiente"
 ],
 "Error getting certificate details: $0": [
  null,
  "Erro ao obter detalhes do certificado: $0"
 ],
 "Error writing kubectl config": [
  null,
  "Erro ao escrever kubectl config"
 ],
 "Fibre Channel": [
  null,
  "Canal de Fibra"
 ],
 "Filesystem Type": [
  null,
  "Tipo do Sistema de Arquivos"
 ],
 "Flex": [
  null,
  "Flex"
 ],
 "Flocker": [
  null,
  "Flocker"
 ],
 "Flocker Dataset Name": [
  null,
  "Nome do Flocker Dataset"
 ],
 "GCE Persistent Disk": [
  null,
  "Disco Persistente GCE"
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Git Repository": [
  null,
  "Repositório Git"
 ],
 "Gluster FS": [
  null,
  "Gluster FS"
 ],
 "GlusterFS": [
  null,
  "GlusterFS"
 ],
 "Grant additional push or admin access to specific members below.": [
  null,
  "Conceder acesso adicional de envio ou admin a membros específicos abaixo."
 ],
 "Group Members": [
  null,
  "Membros do Grupo"
 ],
 "Group or Project": [
  null,
  "Grupo ou Projeto"
 ],
 "Groups": [
  null,
  "Grupos"
 ],
 "Host": [
  null,
  "Máquina"
 ],
 "Host Path": [
  null,
  "Campo de Host"
 ],
 "IP": [
  null,
  "IP"
 ],
 "ISCSI": [
  null,
  "ISCSI"
 ],
 "Identities": [
  null,
  "Identidades"
 ],
 "Identity": [
  null,
  "Ìdentidade"
 ],
 "Image": [
  null,
  "Imagem"
 ],
 "Image ID": [
  null,
  "ID da Imagem"
 ],
 "Image Name": [
  null,
  "Nome da Imagem"
 ],
 "Image Registry": [
  null,
  "Registro de Imagem"
 ],
 "Image Stream": [
  null,
  "Stream de Imagem"
 ],
 "Image commands": [
  null,
  "Comandos da Imagem"
 ],
 "Images": [
  null,
  "Imagens"
 ],
 "Images by project": [
  null,
  "Imagens do projeto"
 ],
 "Images pushed recently": [
  null,
  "Imagens enviadas recentemente"
 ],
 "In order to begin pushing images to the registry, use the commands below.": [
  null,
  "A fim de começar a enviar imagens para o registro, use os comandos abaixo."
 ],
 "In order to begin pushing images to the registry, you need to create a project.": [
  null,
  "A fim de começar a enviar imagens para o registro, você precisa criar um projeto."
 ],
 "Interface": [
  null,
  "Interface"
 ],
 "Kernel Version": [
  null,
  "Versão do Kernel"
 ],
 "Key Ring Path": [
  null,
  "Trajeto Chave do Anel"
 ],
 "Kubelet Version": [
  null,
  "Versão Kubelet"
 ],
 "Kubernetes Cluster": [
  null,
  "Kubernetes Cluster"
 ],
 "Labels": [
  null,
  "Rótulos"
 ],
 "Labels:": [
  null,
  "Rótulos:"
 ],
 "Last Heartbeat": [
  null,
  "Último Batimento Cardíaco"
 ],
 "Last Status Change": [
  null,
  "Última Mudança de Status"
 ],
 "Latest Version": [
  null,
  "Versão Mais Recente"
 ],
 "Log into OpenShift command line tools:": [
  null,
  "Logar em OpenShift ferramentas de linha de comando:"
 ],
 "Log into the registry:": [
  null,
  "Logar no registro:"
 ],
 "Logical Unit Number": [
  null,
  "Número da Unidade Lógica"
 ],
 "Login commands": [
  null,
  "Comandos de login"
 ],
 "Logs": [
  null,
  "Logs"
 ],
 "Machine ID": [
  null,
  "ID de Máquina"
 ],
 "Manifest": [
  null,
  "Manifesto"
 ],
 "Medium": [
  null,
  "Médio"
 ],
 "Member of": [
  null,
  "Membro de"
 ],
 "Members": [
  null,
  "Membros"
 ],
 "Membership": [
  null,
  "Associação"
 ],
 "Memory": [
  null,
  "Memória"
 ],
 "Memory Utilization: $0%": [
  null,
  "Utilização de Memória: $0%"
 ],
 "Memory:": [
  null,
  "Memória:"
 ],
 "Message": [
  null,
  "Mensagem"
 ],
 "Metadata": [
  null,
  "Metadados"
 ],
 "Modify": [
  null,
  "Modificar"
 ],
 "Monitors": [
  null,
  "Monitores"
 ],
 "Mount Location": [
  null,
  "Montar Locação"
 ],
 "N/A": [
  null,
  "N/A"
 ],
 "NFS": [
  null,
  "NFS"
 ],
 "NFS Mount": [
  null,
  "Montagem NFS"
 ],
 "Name": [
  null,
  "Nome"
 ],
 "Namespace": [
  null,
  "Namespace"
 ],
 "Namespace cannot be empty.": [
  null,
  "Namespace não pode estar vazio ."
 ],
 "Network": [
  null,
  "Rede"
 ],
 "New Group": [
  null,
  "Novo Grupo"
 ],
 "New Project": [
  null,
  "Novo Projeto"
 ],
 "New image stream": [
  null,
  "Novo stream de imagem"
 ],
 "New project": [
  null,
  "Novo projeto"
 ],
 "No": [
  null,
  "Não"
 ],
 "No Pods are using this claim": [
  null,
  "Sem Pods usando esta afirmação"
 ],
 "No Volume Bound": [
  null,
  "Nenhuma Ligação de Volume"
 ],
 "No disks defined for this VM": [
  null,
  "Nenhum disco definido para esta VM"
 ],
 "No groups are present.": [
  null,
  "Nenhum grupo presente."
 ],
 "No images pushed": [
  null,
  "Nenhuma imagem inserida"
 ],
 "No metadata file was selected. Please select a Kubernetes metadata file.": [
  null,
  "Nenhum arquivo de metadados foi selecionado. Por favor, selecione um arquivo de metadados Kubernetes ."
 ],
 "No nodes in cluster": [
  null,
  "Não há nós no cluster"
 ],
 "No pods deployed": [
  null,
  "Sem pods implantados"
 ],
 "No pods replicated": [
  null,
  "Sem pods replicados"
 ],
 "No pods scheduled": [
  null,
  "Sem pods agendados"
 ],
 "No pods selected": [
  null,
  "Sem pods selecionados"
 ],
 "No projects are present.": [
  null,
  "Nenhum projeto presente."
 ],
 "No users are present.": [
  null,
  "Não há usuários presentes."
 ],
 "No virtual machines": [
  null,
  "Nenhuma máquina virtual"
 ],
 "No volumes are present.": [
  null,
  "Não há volumes presentes."
 ],
 "No volumes in use": [
  null,
  "Não há volumes em uso"
 ],
 "Node": [
  null,
  "Nó"
 ],
 "Node:": [
  null,
  "Node:"
 ],
 "Nodes": [
  null,
  "Nós"
 ],
 "Nodes are the machines that run your containers.": [
  null,
  "Nós são as máquinas que executam seus contêineres."
 ],
 "None": [
  null,
  "Nenhum"
 ],
 "Not Available": [
  null,
  "Não disponível"
 ],
 "Not Ready": [
  null,
  "Não está pronto"
 ],
 "Not a valid number of replicas": [
  null,
  "Não é um número válido de réplicas"
 ],
 "Not a valid value for Host": [
  null,
  "Não é um valor válido para o Host"
 ],
 "Not deployed": [
  null,
  "Não Implantado"
 ],
 "OS": [
  null,
  "OS"
 ],
 "OS Versions": [
  null,
  "Versões de OS"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Only files of size $0 MiB and less are supported": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "Sistema Operacional"
 ],
 "Options": [
  null,
  "Opções"
 ],
 "Overview": [
  null,
  "Visão geral"
 ],
 "PD Name": [
  null,
  "Nome de PD"
 ],
 "Partition": [
  null,
  "Partição"
 ],
 "Password": [
  null,
  "Senha"
 ],
 "Paste JSON below, ": [
  null,
  ""
 ],
 "Path": [
  null,
  "Caminho"
 ],
 "Pending Volume Claims": [
  null,
  "Declarações de Volume Pendentes"
 ],
 "Persistent Volumes": [
  null,
  "Volumes Persistentes"
 ],
 "Phase": [
  null,
  "Fase"
 ],
 "Please create another namespace for $0 \"$1\"": [
  null,
  "Por favor, crie outro namespace para $0 \"$1\""
 ],
 "Please provide a GlusterFS volume name": [
  null,
  "Por favor, forneça um nome de volume GlusterFS"
 ],
 "Please provide a username": [
  null,
  "Por favor, forneça um nome de usuário"
 ],
 "Please provide a valid NFS server": [
  null,
  "Por favor, forneça um servidor NFS válido"
 ],
 "Please provide a valid address": [
  null,
  "Por favor, forneça um endereço válido"
 ],
 "Please provide a valid filesystem type": [
  null,
  "Por favor, forneça um tipo de sistema de arquivos válido"
 ],
 "Please provide a valid interface": [
  null,
  "Por favor, forneça uma interface válida"
 ],
 "Please provide a valid logical unit number": [
  null,
  "Por favor, forneça um número lógico válido de unidade"
 ],
 "Please provide a valid name": [
  null,
  "Por favor, forneça um nome válido"
 ],
 "Please provide a valid namespace.": [
  null,
  "Por favor, forneça um namespace válido."
 ],
 "Please provide a valid path": [
  null,
  "Por favor, forneça um caminho válido"
 ],
 "Please provide a valid qualified name": [
  null,
  "Por favor, forneça um nome qualificado válido"
 ],
 "Please provide a valid storage capacity.": [
  null,
  "Por favor, forneça uma capacidade de armazenamento válida."
 ],
 "Please provide a valid target": [
  null,
  "Por favor, forneça um alvo válido"
 ],
 "Please select a valid access mode": [
  null,
  "Por favor, selecione um modo de acesso válido"
 ],
 "Please select a valid endpoint": [
  null,
  "Por favor, selecione um ponto de extremidade válido"
 ],
 "Please select a valid policy option.": [
  null,
  "Por favor, selecione uma opção de diretiva válida."
 ],
 "Please type an address": [
  null,
  "Por favor, digite um endereço"
 ],
 "Pod": [
  null,
  "Pod"
 ],
 "Pod Address": [
  null,
  "Endereço Pod"
 ],
 "Pod Endpoints": [
  null,
  "Extremidades Pod"
 ],
 "Pod Replicated": [
  null,
  "Pod Replicado"
 ],
 "Pod Selector": [
  null,
  "Seletor Pod"
 ],
 "Pod:": [
  null,
  "Pod:"
 ],
 "Pods": [
  null,
  "Pods"
 ],
 "Pods contain one or more containers that run together on a node, containing your application code.": [
  null,
  "Pods contêm um ou mais conteiners que são executados juntos em um nó, que contém o código do aplicativo."
 ],
 "Pool Name": [
  null,
  "Nome do Pool"
 ],
 "Populate": [
  null,
  "Preencher"
 ],
 "Ports": [
  null,
  "Portas"
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  "Privado: permite que apenas usuários específicos ou grupos puxem imagens"
 ],
 "Project": [
  null,
  "Projeto"
 ],
 "Project Members": [
  null,
  "Membros do Projeto"
 ],
 "Project access policy allows anonymous users to pull images.": [
  null,
  "A diretiva de acesso ao projeto permite que usuários anônimos baixem imagens."
 ],
 "Project access policy allows any authenticated user to pull images.": [
  null,
  "A diretiva de acesso a projetos permite que qualquer usuário autenticado puxe imagens."
 ],
 "Project access policy only allows specific members to access images.": [
  null,
  "A diretiva de acesso ao projeto só permite que membros específicos acessem imagens."
 ],
 "Project:": [
  null,
  "Projeto:"
 ],
 "Projects": [
  null,
  "Projetos"
 ],
 "Proxy Version": [
  null,
  "Versão do Proxy"
 ],
 "Pull an image:": [
  null,
  "Baixar uma imagem:"
 ],
 "Pull from": [
  null,
  "Baixar de"
 ],
 "Pull specific tags from another image repository": [
  null,
  "Resgatar tags específicas de outro repositório de imagem"
 ],
 "Push an image:": [
  null,
  "Enviar uma imagem:"
 ],
 "Qualified Name": [
  null,
  "Nome Qualificado"
 ],
 "Rados Block Device": [
  null,
  "Dispositivo Rados Bloqueado"
 ],
 "Read Only": [
  null,
  "Somente leitura"
 ],
 "Read and write from a single node": [
  null,
  "Ler e gravar a partir de um único nó"
 ],
 "Read and write from multiple nodes": [
  null,
  "Ler e gravar a partir de vários nós"
 ],
 "Read only from multiple nodes": [
  null,
  "Somente leitura de vários nós"
 ],
 "Readonly": [
  null,
  "Apenasleitura"
 ],
 "Ready": [
  null,
  "Pronto"
 ],
 "Reason": [
  null,
  "Razão"
 ],
 "Reclaim Policy": [
  null,
  "Recuperar Política"
 ],
 "Reconnect": [
  null,
  "Reconectar"
 ],
 "Recycle": [
  null,
  "Reciclar"
 ],
 "Register": [
  null,
  "Registrar"
 ],
 "Register New Volume": [
  null,
  "Registrar Novo Volume"
 ],
 "Register Persistent Volume": [
  null,
  "Registrar Volume Persistente"
 ],
 "Remote registry is insecure": [
  null,
  "Registro remoto é inseguro"
 ],
 "Remove": [
  null,
  "Remover"
 ],
 "Remove Group": [
  null,
  "Remover Grupo"
 ],
 "Remove Member": [
  null,
  "Remover Membro"
 ],
 "Remove Role": [
  null,
  "Remover Função"
 ],
 "Remove User": [
  null,
  "Remover Usuário"
 ],
 "Remove image tag": [
  null,
  "Remover tag de imagem"
 ],
 "Remove membership": [
  null,
  "Remover associação"
 ],
 "Replicas": [
  null,
  "Réplicas"
 ],
 "Replication Controller": [
  null,
  "Controlador de Replicação"
 ],
 "Replication Controllers": [
  null,
  "Controladores de Replicação"
 ],
 "Replication controllers dynamically create instances of pods from templates, and remove pods when necessary.": [
  null,
  "Os controladores de replicação criam dinamicamente instâncias modelos de pods e removem esses pods quando necessário."
 ],
 "Repository URL": [
  null,
  "URL do Repositório"
 ],
 "Requested": [
  null,
  "Requisitado"
 ],
 "Requests": [
  null,
  "Requisições"
 ],
 "Requires Authentication": [
  null,
  "Requer Autenticação"
 ],
 "Resolve above errors to continue": [
  null,
  ""
 ],
 "Restart Count": [
  null,
  "Reiniciar Contagem"
 ],
 "Restart Policy": [
  null,
  "Reinicie a Política"
 ],
 "Retain": [
  null,
  "Manter"
 ],
 "Revision": [
  null,
  "Revisão"
 ],
 "Role": [
  null,
  "Função"
 ],
 "Roles": [
  null,
  "Papéis"
 ],
 "Route": [
  null,
  "Rota"
 ],
 "Routes": [
  null,
  "Rotas"
 ],
 "Scheduled Pods": [
  null,
  "Pods Agendados"
 ],
 "Scheduling Disabled": [
  null,
  "Agendamento Desativado"
 ],
 "Secret": [
  null,
  "Secreto"
 ],
 "Secret File": [
  null,
  "Arquivo Secreto"
 ],
 "Secret Name": [
  null,
  "Nome Secreto"
 ],
 "Secret Volume": [
  null,
  "Volume Secreto"
 ],
 "Select Manifest File...": [
  null,
  "Selecione Arquivo Manifest ..."
 ],
 "Select an object to see more details.": [
  null,
  "Selecione um objeto para ver mais detalhes."
 ],
 "Server": [
  null,
  "Servidor"
 ],
 "Service": [
  null,
  "Serviço"
 ],
 "Service Account": [
  null,
  "Serviço de Conta"
 ],
 "Services": [
  null,
  "Serviços"
 ],
 "Services group pods and provide a common DNS name and an optional, load-balanced IP address to access them.": [
  null,
  "Pods de grupo de serviços fornecem um nome DNS comum e um endereço IP opcional, balanceado por carga para acessá-los."
 ],
 "Session": [
  null,
  "Sessão"
 ],
 "Session Affinity": [
  null,
  "Afinidade de Sessão"
 ],
 "Share Name": [
  null,
  "Compartilhar Nome"
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  "Compartilhado: permitir que qualquer usuário autenticado baixe imagens"
 ],
 "Shell": [
  null,
  "Shell"
 ],
 "Show all Containers": [
  null,
  "Exibir todos os Contêineres"
 ],
 "Show all Deployment Configs": [
  null,
  "Exibir todas as Configs de Implantação"
 ],
 "Show all Nodes": [
  null,
  "Exibir todos os Nós"
 ],
 "Show all Persistent Volumes": [
  null,
  "Exibir todos os Volumes Persistentes"
 ],
 "Show all Pod Containers": [
  null,
  "Exibir todos os Contêineres Pod"
 ],
 "Show all Pods": [
  null,
  "Exibir todos os Pods"
 ],
 "Show all Projects": [
  null,
  "Exibir todos os Projetos"
 ],
 "Show all Replication Controllers": [
  null,
  "Exibir todos os Controladores de Replicação"
 ],
 "Show all Routes": [
  null,
  "Exibir todas as Rotas"
 ],
 "Show all Services": [
  null,
  "Exibir todos os Serviços"
 ],
 "Show all image streams": [
  null,
  "Exibir todos os streams de imagem"
 ],
 "Show all images": [
  null,
  "Exibir todas as imagens"
 ],
 "Since": [
  null,
  "Desde"
 ],
 "Size": [
  null,
  "Tamanho"
 ],
 "Skip Certificate Verification": [
  null,
  "Ignorar Verificação de Certificado"
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  "Desculpe, eu não sei como modificar este volume"
 ],
 "Source": [
  null,
  "Fonte"
 ],
 "State": [
  null,
  "Estado"
 ],
 "Status": [
  null,
  "Estado"
 ],
 "Strategy": [
  null,
  "Estratégia"
 ],
 "Sync all tags from a remote image repository": [
  null,
  "Sincronizar todas as tags de um repositório de imagens remotas"
 ],
 "System": [
  null,
  "Sistema"
 ],
 "TLS Termination": [
  null,
  "Término de TLS"
 ],
 "Tags": [
  null,
  "Tags"
 ],
 "Target": [
  null,
  "Alvo"
 ],
 "Target Portal": [
  null,
  "Portal Alvo"
 ],
 "Target World Wide Names": [
  null,
  "Nomes de Alvos Mundiais"
 ],
 "Template": [
  null,
  "Modelo"
 ],
 "The address contains invalid characters": [
  null,
  "O endereço contém caracteres inválidos"
 ],
 "The container '{{ target }}' does not exist.": [
  null,
  "O contêiner '{{ target }}' não existe."
 ],
 "The deployment config '{{ target }}' does not exist.": [
  null,
  "O Deployment config '{{target}}' não existe."
 ],
 "The group '{{ groupName }}' does not exist.": [
  null,
  "O grupo '{{ groupName }}' não existe."
 ],
 "The maximum number of replicas is 128": [
  null,
  "O número máximo de réplicas é 128"
 ],
 "The name contains invalid characters": [
  null,
  "O nome contém caracteres inválidos"
 ],
 "The node '{{ target }}' does not exist.": [
  null,
  "O nó '{{ target }}' não existe."
 ],
 "The node doesn't have enough disk space": [
  null,
  "O nó não tem espaço em disco suficiente"
 ],
 "The node doesn't have enough free memory": [
  null,
  "O nó não tem memória livre suficiente"
 ],
 "The persistent volume '{{ target }}' does not exist.": [
  null,
  "O volume persistente '{{ target }}' não existe."
 ],
 "The pod '{{ target }}' does not exist.": [
  null,
  "O pod '{{ target }}' não existe."
 ],
 "The project '{{ projName }}' does not exist.": [
  null,
  "O projeto '{{ projName }}' não existe."
 ],
 "The replication controller '{{ target }}' does not exist.": [
  null,
  "O controlador de replicação '{{ target }}' não existe."
 ],
 "The route '{{ target }}' does not exist.": [
  null,
  "A rota '{{ target }}' não existe."
 ],
 "The selected file is not a valid Kubernetes application manifest.": [
  null,
  "O arquivo selecionado não é um manifesto do aplicativo Kubernetes válido."
 ],
 "The server uses a certificate signed by an unknown authority.": [
  null,
  "O servidor usa um certificado assinado por uma autoridade desconhecida."
 ],
 "The service '{{ target }}' does not exist.": [
  null,
  "O serviço '{{ target }}' não existe."
 ],
 "The user '{{ userName }}' does not exist.": [
  null,
  "O usuário '{{ userName }}' não existe."
 ],
 "This claim is in use. Deleting it may cause issues with the following pod:": [
  null,
  "Esta afirmação está em uso. Excluí-lo pode causar problemas com o seguinte pod:"
 ],
 "This option is for single node testing only – local storage will not work in a multi-node cluster": [
  null,
  "Esta opção é apenas para testes de nó único – o armazenamento local não funcionará em um cluster de vários nós"
 ],
 "This volume has been claimed by {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Deleting it will break that claim and may cause issues with any pods depending on it.": [
  null,
  "Este volume foi reivindicado por {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Excluí-lo vai parar essa reivindicação e pode causar problemas com quaisquer pods, dependendo dele."
 ],
 "This volume has not been claimed": [
  null,
  "Este volume não foi reivindicado"
 ],
 "Token": [
  null,
  "Token"
 ],
 "Topology": [
  null,
  "Topologia"
 ],
 "Triggers": [
  null,
  "Triggers"
 ],
 "Troubleshoot": [
  null,
  "Solução de problemas"
 ],
 "Trust this certificate for this connection": [
  null,
  "Confie neste certificado para esta conexão"
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "Type:": [
  null,
  "Tipo:"
 ],
 "Unable to decode Kubernetes application manifest.": [
  null,
  "Não é possível decodificar o manifesto do aplicativo Kubernetes."
 ],
 "Unable to read the Kubernetes application manifest. Code $0.": [
  null,
  "Não é possível ler o manifesto do aplicativo Kubernetes . Código $0."
 ],
 "Unavailable": [
  null,
  "Indisponível"
 ],
 "Unknown": [
  null,
  "Desconhecido"
 ],
 "Updating $0...": [
  null,
  "Atualizando $0..."
 ],
 "Used": [
  null,
  "Usado"
 ],
 "User": [
  null,
  "Usuário"
 ],
 "User or Group": [
  null,
  "Usuário ou Grupo"
 ],
 "Username": [
  null,
  "Nome de Usuário"
 ],
 "Users": [
  null,
  "Usuários"
 ],
 "VM DELETE failed.": [
  null,
  ""
 ],
 "VM definition is not a valid JSON.": [
  null,
  ""
 ],
 "VM definition is required.": [
  null,
  ""
 ],
 "VM definition must be an object.": [
  null,
  ""
 ],
 "Virtual Machines": [
  null,
  "Máquinas Virtuais"
 ],
 "Volume": [
  null,
  "Volume"
 ],
 "Volume ID": [
  null,
  "ID do Volume"
 ],
 "Volume Name": [
  null,
  "Nome do Volume"
 ],
 "Volume Type": [
  null,
  "Tipo do Volume"
 ],
 "Volumes": [
  null,
  "Volumes"
 ],
 "Warning:": [
  null,
  "Aviso:"
 ],
 "Welcome to the Image Registry": [
  null,
  "Bem vindo ao Registro de Imagem"
 ],
 "When": [
  null,
  "Quando"
 ],
 "Yes": [
  null,
  "Sim"
 ],
 "You can bypass the certificate check, but any data you send to the server could be intercepted by others.": [
  null,
  "Você pode ignorar a verificação do certificado, mas os dados que você enviar para o servidor podem ser interceptados por outros."
 ],
 "You can deploy an application to your cluster.": [
  null,
  "Você pode implantar um aplicativo para o seu cluster."
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  "As credenciais de login não lhe dão acesso para usar o registro de docker na linha de comando."
 ],
 "bridge": [
  null,
  ""
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "crashed": [
  null,
  "travou"
 ],
 "custom": [
  null,
  "personalizado"
 ],
 "direct": [
  null,
  ""
 ],
 "disabled": [
  null,
  "desabilitado"
 ],
 "disk": [
  null,
  "disco"
 ],
 "down": [
  null,
  ""
 ],
 "dying": [
  null,
  "morrendo"
 ],
 "eg: my-image-stream": [
  null,
  "eg: meu-stream-de-imagem"
 ],
 "enabled": [
  null,
  "habilitado"
 ],
 "ethernet": [
  null,
  ""
 ],
 "host": [
  null,
  "host"
 ],
 "hostdev": [
  null,
  ""
 ],
 "iSCSI": [
  null,
  ""
 ],
 "idle": [
  null,
  "ocioso"
 ],
 "mcast": [
  null,
  ""
 ],
 "n/a": [
  null,
  ""
 ],
 "network": [
  null,
  "rede"
 ],
 "no": [
  null,
  "não"
 ],
 "none": [
  null,
  "Nenhum"
 ],
 "paused": [
  null,
  "pausado"
 ],
 "pending volume claims": [
  null,
  "declarações de volume pendentes"
 ],
 "running": [
  null,
  "executando"
 ],
 "server": [
  null,
  ""
 ],
 "show less": [
  null,
  ""
 ],
 "show more": [
  null,
  ""
 ],
 "shut off": [
  null,
  "desligar"
 ],
 "shutdown": [
  null,
  "desligar"
 ],
 "suspended (PM)": [
  null,
  "suspenso (PM)"
 ],
 "udp": [
  null,
  ""
 ],
 "up": [
  null,
  ""
 ],
 "upload a JSON file": [
  null,
  ""
 ],
 "user": [
  null,
  ""
 ],
 "vCPUs:": [
  null,
  "vCPUs:"
 ],
 "vhostuser": [
  null,
  ""
 ],
 "yes": [
  null,
  "sim"
 ]
}));
