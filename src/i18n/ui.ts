export const languages = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  de: 'Deutsch',
  fr: 'Français',
  ja: '日本語',
} as const;

export type Locale = keyof typeof languages;

export const defaultLang: Locale = 'en';

export const ui = {
  en: {
    // Branding & Navigation
    'brand.name': 'EditPDF',
    'nav.editor': 'Editor',
    'nav.faq': 'FAQ',
    'nav.howItWorks': 'How it Works',
    'nav.support': 'Support Developer',
    'nav.toggleTheme': 'Toggle theme',
    'nav.selectLanguage': 'Select language',

    // SEO Meta
    'seo.title': 'Free Online PDF Editor & Form Filler | Secure, No Uploads',
    'seo.description': 'Edit PDF files, fill forms, and add signatures instantly in your browser. 100% free and secure - your files are never uploaded to any server.',
    'seo.ogTitle': 'Free Online PDF Editor & Form Filler | Secure, No Uploads',

    // Hero Section
    'hero.h1': 'Free Secure PDF Editor - Fill Forms & Sign Instantly',
    'hero.subtitle': 'Edit PDF files without uploading to any server. Everything happens locally in your browser.',

    // How It Works
    'how.title': 'How our Secure PDF Editor Works',
    'how.p1': 'Looking to edit PDF forms easily without compromising your privacy? Our free online PDF editor lets you add text, draw your signature, and fill out documents instantly.',
    'how.p2': 'Most online PDF tools force you to upload your sensitive files (like bank statements or contracts) to their remote servers. We take a different approach. Because everything runs locally right inside your web browser using modern web technologies, it is the most secure PDF form filler available - absolutely no server uploads required.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Is my data secure?',
    'faq.a1': 'Absolutely. EditPDF processes everything entirely within your own web browser. Your PDF files are never uploaded to any cloud server, ensuring 100% privacy and security.',
    'faq.q2': 'Can I add my own signature?',
    'faq.a2': 'Yes, you can draw your signature, type it out using various fonts, or upload an image of your signature. Once added, you can resize and drag it anywhere on the document.',
    'faq.q3': 'Do I need to create an account?',
    'faq.a3': 'No, EditPDF is a free, instant tool. There are no accounts, no subscriptions, and no hidden fees required to edit your documents.',

    // Footer
    'footer.text': 'All processing happens locally in your browser.',

    // PDF Editor Workspace Tools
    'editor.uploadPrompt': 'Upload a PDF to start editing',
    'editor.uploadSub': 'Your files are processed securely in your browser and are never uploaded to any server.',
    'editor.selectPdf': 'Select PDF File',
    'editor.eyeCare': 'Eye Care Mode',
    'editor.viewEdit': 'Edit',
    'editor.viewOrganize': 'Organize',
    'editor.toolSelect': 'Select',
    'editor.toolText': 'Add Text',
    'editor.toolDraw': 'Draw',
    'editor.toolHighlight': 'Highlight',
    'editor.toolBlackout': 'Blackout',
    'editor.toolWhiteout': 'Whiteout',
    'editor.toolSignature': 'Signature',
    'editor.toolCheckmark': 'Checkmark',
    'editor.toolCross': 'Cross',
    'editor.toolStamp': 'Stamp',
    'editor.fontSize': 'Size',
    'editor.bold': 'Bold',
    'editor.italic': 'Italic',
    'editor.highlighterColor': 'Color',
    'editor.stampApproved': 'APPROVED',
    'editor.stampConfidential': 'CONFIDENTIAL',
    'editor.stampDraft': 'DRAFT',
    'editor.stampCustom': 'CUSTOM...',
    'editor.download': 'Download PDF',
    'editor.saveDownload': 'Download',
    'editor.saving': 'Saving PDF...',
    'editor.prevPage': 'Previous page',
    'editor.nextPage': 'Next page',
    'editor.page': 'Page',
    'editor.of': 'of',
    'editor.pages': 'Pages',
    'editor.deletePage': 'Delete Page',
    'editor.rotatePage': 'Rotate Page',
    'editor.cannotDeleteLast': 'You cannot delete the last page.',
    'editor.organizeTitle': 'Organize Pages',
    'editor.organizeSub': 'Drag pages to reorder them. Click the trash icon to delete a page.',
    
    // Signature Modal
    'sig.title': 'Add Signature',
    'sig.typeTab': 'Type Signature',
    'sig.drawTab': 'Draw Signature',
    'sig.uploadTab': 'Upload Image',
    'sig.namePlaceholder': 'Type your name...',
    'sig.clear': 'Clear',
    'sig.apply': 'Apply Signature',
    'sig.uploadBoxPrompt': 'Click to upload image',
    'sig.uploadBoxSub': 'PNG or JPG, max 5MB',
    'sig.changeImage': 'Change Image',
    'sig.close': 'Close modal',
  },

  es: {
    // Branding & Navigation
    'brand.name': 'EditPDF',
    'nav.editor': 'Editor',
    'nav.faq': 'Preguntas Frecuentes',
    'nav.howItWorks': 'Cómo Funciona',
    'nav.support': 'Apoyar al Desarrollador',
    'nav.toggleTheme': 'Cambiar tema',
    'nav.selectLanguage': 'Seleccionar idioma',

    // SEO Meta
    'seo.title': 'Editor de PDF y Rellenador de Formularios Online Gratis | Seguro y Sin Subidas',
    'seo.description': 'Edita archivos PDF, rellena formularios y añade firmas al instante en tu navegador. 100% gratuito y seguro: tus archivos nunca se suben a ningún servidor.',
    'seo.ogTitle': 'Editor de PDF y Rellenador de Formularios Online Gratis | Seguro y Sin Subidas',

    // Hero Section
    'hero.h1': 'Editor PDF Seguro y Gratuito - Rellena y Firma al Instante',
    'hero.subtitle': 'Edita archivos PDF sin subirlos a ningún servidor. Todo se procesa localmente en tu navegador.',

    // How It Works
    'how.title': 'Cómo Funciona Nuestro Editor PDF Seguro',
    'how.p1': '¿Deseas editar formularios PDF con facilidad sin poner en riesgo tu privacidad? Nuestro editor PDF online gratuito te permite añadir texto, dibujar firmas y completar documentos al instante.',
    'how.p2': 'La mayoría de herramientas online te obligan a subir tus archivos confidenciales (como extractos bancarios o contratos) a sus servidores remotos. Nosotros ofrecemos una solución diferente: todo funciona localmente en tu navegador mediante tecnologías web modernas, convirtiéndolo en la herramienta más segura sin subidas de archivos.',

    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.q1': '¿Están seguros mis datos?',
    'faq.a1': 'Totalmente. EditPDF procesa todo dentro de tu propio navegador. Tus archivos PDF nunca se cargan en servidores en la nube, garantizando un 100% de privacidad y seguridad.',
    'faq.q2': '¿Puedo añadir mi propia firma?',
    'faq.a2': 'Sí, puedes dibujar tu firma, escribirla utilizando diversas tipografías o subir una imagen de tu firma. Una vez añadida, podrás redimensionarla y ubicarla libremente.',
    'faq.q3': '¿Necesito crear una cuenta?',
    'faq.a3': 'No, EditPDF es una herramienta gratuita y de acceso instantáneo. No requiere registros, suscripciones ni tarifas ocultas.',

    // Footer
    'footer.text': 'Todo el procesamiento se realiza localmente en tu navegador.',

    // PDF Editor Workspace Tools
    'editor.uploadPrompt': 'Sube un PDF para comenzar a editar',
    'editor.uploadSub': 'Tus archivos se procesan de forma segura en tu navegador y nunca se suben a ningún servidor.',
    'editor.selectPdf': 'Seleccionar Archivo PDF',
    'editor.eyeCare': 'Modo Cuidado Visual',
    'editor.viewEdit': 'Editar',
    'editor.viewOrganize': 'Organizar',
    'editor.toolSelect': 'Seleccionar',
    'editor.toolText': 'Añadir Texto',
    'editor.toolDraw': 'Dibujar',
    'editor.toolHighlight': 'Resaltar',
    'editor.toolBlackout': 'Ocultar (Negro)',
    'editor.toolWhiteout': 'Borrar (Blanco)',
    'editor.toolSignature': 'Firma',
    'editor.toolCheckmark': 'Marca de verificación',
    'editor.toolCross': 'Cruz',
    'editor.toolStamp': 'Sello',
    'editor.fontSize': 'Tamaño',
    'editor.bold': 'Negrita',
    'editor.italic': 'Cursiva',
    'editor.highlighterColor': 'Color',
    'editor.stampApproved': 'APROBADO',
    'editor.stampConfidential': 'CONFIDENCIAL',
    'editor.stampDraft': 'BORRADOR',
    'editor.stampCustom': 'PERSONALIZADO...',
    'editor.download': 'Descargar PDF',
    'editor.saveDownload': 'Descargar',
    'editor.saving': 'Guardando PDF...',
    'editor.prevPage': 'Página anterior',
    'editor.nextPage': 'Página siguiente',
    'editor.page': 'Página',
    'editor.of': 'de',
    'editor.pages': 'Páginas',
    'editor.deletePage': 'Eliminar Página',
    'editor.rotatePage': 'Rotar Página',
    'editor.cannotDeleteLast': 'No puedes eliminar la última página.',
    'editor.organizeTitle': 'Organizar Páginas',
    'editor.organizeSub': 'Arrastra las páginas para reordenarlas. Haz clic en la papelera para eliminarlas.',

    // Signature Modal
    'sig.title': 'Añadir Firma',
    'sig.typeTab': 'Escribir Firma',
    'sig.drawTab': 'Dibujar Firma',
    'sig.uploadTab': 'Subir Imagen',
    'sig.namePlaceholder': 'Escribe tu nombre...',
    'sig.clear': 'Limpiar',
    'sig.apply': 'Aplicar Firma',
    'sig.uploadBoxPrompt': 'Haz clic para subir imagen',
    'sig.uploadBoxSub': 'PNG o JPG, máx. 5MB',
    'sig.changeImage': 'Cambiar Imagen',
    'sig.close': 'Cerrar ventana',
  },

  pt: {
    // Branding & Navigation
    'brand.name': 'EditPDF',
    'nav.editor': 'Editor',
    'nav.faq': 'Perguntas Frequentes',
    'nav.howItWorks': 'Como Funciona',
    'nav.support': 'Apoiar o Desenvolvedor',
    'nav.toggleTheme': 'Alternar tema',
    'nav.selectLanguage': 'Selecionar idioma',

    // SEO Meta
    'seo.title': 'Editor de PDF Online Grátis e Preenchimento de Formulários | Seguro e Sem Uploads',
    'seo.description': 'Edite arquivos PDF, preencha formulários e adicione assinaturas instantaneamente no navegador. 100% gratuito e seguro - seus arquivos nunca são enviados a servidores.',
    'seo.ogTitle': 'Editor de PDF Online Grátis e Preenchimento de Formulários | Seguro e Sem Uploads',

    // Hero Section
    'hero.h1': 'Editor de PDF Gratuito e Seguro - Preencha e Assine na Hora',
    'hero.subtitle': 'Edite arquivos PDF sem enviá-los a nenhum servidor. Tudo acontece localmente no seu navegador.',

    // How It Works
    'how.title': 'Como Funciona o Nosso Editor de PDF Seguro',
    'how.p1': 'Deseja editar formulários PDF facilmente sem abrir mão da sua privacidade? Nosso editor de PDF online gratuito permite adicionar texto, desenhar assinaturas e preencher documentos na hora.',
    'how.p2': 'A maioria das ferramentas online força o upload dos seus arquivos confidenciais (como extratos bancários e contratos) para servidores externos. Nós adotamos uma abordagem diferente: todo o processamento ocorre localmente no navegador, sendo a opção mais segura sem necessidade de upload.',

    // FAQ
    'faq.title': 'Perguntas Frequentes',
    'faq.q1': 'Os meus dados estão seguros?',
    'faq.a1': 'Com certeza. O EditPDF processa tudo exclusivamente no seu navegador. Seus arquivos PDF nunca são enviados para a nuvem, garantindo 100% de privacidade.',
    'faq.q2': 'Posso adicionar minha própria assinatura?',
    'faq.a2': 'Sim, você pode desenhar sua assinatura, digitá-la escolhendo entre várias fontes ou enviar uma imagem. Depois é só redimensionar e posicionar no documento.',
    'faq.q3': 'Preciso criar uma conta?',
    'faq.a3': 'Não, o EditPDF é gratuito e de uso imediato. Não há contas, assinaturas ou taxas ocultas.',

    // Footer
    'footer.text': 'Todo o processamento ocorre localmente no seu navegador.',

    // PDF Editor Workspace Tools
    'editor.uploadPrompt': 'Envie um PDF para começar a editar',
    'editor.uploadSub': 'Seus arquivos são processados com segurança no seu navegador e nunca são enviados a nenhum servidor.',
    'editor.selectPdf': 'Selecionar Arquivo PDF',
    'editor.eyeCare': 'Modo Descanso Visual',
    'editor.viewEdit': 'Editar',
    'editor.viewOrganize': 'Organizar',
    'editor.toolSelect': 'Selecionar',
    'editor.toolText': 'Adicionar Texto',
    'editor.toolDraw': 'Desenhar',
    'editor.toolHighlight': 'Destacar',
    'editor.toolBlackout': 'Ocultar (Preto)',
    'editor.toolWhiteout': 'Apagar (Branco)',
    'editor.toolSignature': 'Assinatura',
    'editor.toolCheckmark': 'Visto',
    'editor.toolCross': 'Cruz',
    'editor.toolStamp': 'Carimbo',
    'editor.fontSize': 'Tamanho',
    'editor.bold': 'Negrito',
    'editor.italic': 'Itálico',
    'editor.highlighterColor': 'Cor',
    'editor.stampApproved': 'APROVADO',
    'editor.stampConfidential': 'CONFIDENCIAL',
    'editor.stampDraft': 'RASCUNHO',
    'editor.stampCustom': 'PERSONALIZADO...',
    'editor.download': 'Baixar PDF',
    'editor.saveDownload': 'Baixar',
    'editor.saving': 'Salvando PDF...',
    'editor.prevPage': 'Página anterior',
    'editor.nextPage': 'Próxima página',
    'editor.page': 'Página',
    'editor.of': 'de',
    'editor.pages': 'Páginas',
    'editor.deletePage': 'Excluir Página',
    'editor.rotatePage': 'Girar Página',
    'editor.cannotDeleteLast': 'Você não pode excluir a última página.',
    'editor.organizeTitle': 'Organizar Páginas',
    'editor.organizeSub': 'Arraste as páginas para reordenar. Clique na lixeira para excluir.',

    // Signature Modal
    'sig.title': 'Adicionar Assinatura',
    'sig.typeTab': 'Digitar Assinatura',
    'sig.drawTab': 'Desenhar Assinatura',
    'sig.uploadTab': 'Enviar Imagem',
    'sig.namePlaceholder': 'Digite seu nome...',
    'sig.clear': 'Limpar',
    'sig.apply': 'Aplicar Assinatura',
    'sig.uploadBoxPrompt': 'Clique para enviar imagem',
    'sig.uploadBoxSub': 'PNG ou JPG, máx. 5MB',
    'sig.changeImage': 'Trocar Imagem',
    'sig.close': 'Fechar janela',
  },

  de: {
    // Branding & Navigation
    'brand.name': 'EditPDF',
    'nav.editor': 'Editor',
    'nav.faq': 'Häufige Fragen',
    'nav.howItWorks': 'So funktioniert es',
    'nav.support': 'Entwickler unterstützen',
    'nav.toggleTheme': 'Design wechseln',
    'nav.selectLanguage': 'Sprache wählen',

    // SEO Meta
    'seo.title': 'Kostenloser Online-PDF-Editor & Formularausfüller | Sicher, ohne Upload',
    'seo.description': 'Bearbeiten Sie PDF-Dateien, füllen Sie Formulare aus und signieren Sie Dokumente direkt im Browser. 100 % kostenlos und sicher – Ihre Dateien verlassen niemals Ihr Gerät.',
    'seo.ogTitle': 'Kostenloser Online-PDF-Editor & Formularausfüller | Sicher, ohne Upload',

    // Hero Section
    'hero.h1': 'Kostenloser sicherer PDF-Editor – Formulare ausfüllen & signieren',
    'hero.subtitle': 'Bearbeiten Sie PDFs ohne Server-Upload. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser.',

    // How It Works
    'how.title': 'So funktioniert unser sicherer PDF-Editor',
    'how.p1': 'Möchten Sie PDF-Formulare einfach und datenschutzkonform bearbeiten? Mit unserem kostenlosen Online-PDF-Editor können Sie Text hinzufügen, Unterschriften zeichnen und Dokumente sofort ausfüllen.',
    'how.p2': 'Viele Online-Dienste verlangen das Hochladen sensibler Dokumente (wie Bankauszüge oder Verträge) auf fremde Server. Wir wählen einen anderen Weg: Dank modernster Webtechnologien läuft alles direkt in Ihrem Webbrowser – absolut ohne Uploads.',

    // FAQ
    'faq.title': 'Häufig gestellte Fragen',
    'faq.q1': 'Sind meine Daten sicher?',
    'faq.a1': 'Absolut. EditPDF verarbeitet alle Inhalte vollständig in Ihrem eigenen Browser. Ihre PDFs werden niemals auf einen Cloud-Server geladen, was 100 % Privatsphäre garantiert.',
    'faq.q2': 'Kann ich eine eigene Unterschrift einfügen?',
    'faq.a2': 'Ja, Sie können Ihre Unterschrift zeichnen, mit verschiedenen Schriftarten eintippen oder ein Bild hochladen. Anschließend lässt sie sich frei skalieren und platzieren.',
    'faq.q3': 'Muss ich ein Benutzerkonto erstellen?',
    'faq.a3': 'Nein, EditPDF ist sofort und kostenlos nutzbar. Es sind keine Konten, Abonnements oder versteckte Gebühren erforderlich.',

    // Footer
    'footer.text': 'Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser.',

    // PDF Editor Workspace Tools
    'editor.uploadPrompt': 'PDF hochladen, um mit dem Bearbeiten zu beginnen',
    'editor.uploadSub': 'Ihre Dateien werden sicher in Ihrem Browser verarbeitet und niemals auf einen Server hochgeladen.',
    'editor.selectPdf': 'PDF-Datei auswählen',
    'editor.eyeCare': 'Augenschonender Modus',
    'editor.viewEdit': 'Bearbeiten',
    'editor.viewOrganize': 'Organisieren',
    'editor.toolSelect': 'Auswählen',
    'editor.toolText': 'Text hinzufügen',
    'editor.toolDraw': 'Zeichnen',
    'editor.toolHighlight': 'Hervorheben',
    'editor.toolBlackout': 'Schwärzen',
    'editor.toolWhiteout': 'Weiß überdecken',
    'editor.toolSignature': 'Unterschrift',
    'editor.toolCheckmark': 'Häkchen',
    'editor.toolCross': 'Kreuz',
    'editor.toolStamp': 'Stempel',
    'editor.fontSize': 'Größe',
    'editor.bold': 'Fett',
    'editor.italic': 'Kursiv',
    'editor.highlighterColor': 'Farbe',
    'editor.stampApproved': 'GENEHMIGT',
    'editor.stampConfidential': 'VERTRAULICH',
    'editor.stampDraft': 'ENTWURF',
    'editor.stampCustom': 'BENUTZERDEFINIERT...',
    'editor.download': 'PDF herunterladen',
    'editor.saveDownload': 'Herunterladen',
    'editor.saving': 'PDF wird gespeichert...',
    'editor.prevPage': 'Vorherige Seite',
    'editor.nextPage': 'Nächste Seite',
    'editor.page': 'Seite',
    'editor.of': 'von',
    'editor.pages': 'Seiten',
    'editor.deletePage': 'Seite löschen',
    'editor.rotatePage': 'Seite drehen',
    'editor.cannotDeleteLast': 'Die letzte verbleibende Seite kann nicht gelöscht werden.',
    'editor.organizeTitle': 'Seiten organisieren',
    'editor.organizeSub': 'Ziehen Sie Seiten per Drag & Drop zum Sortieren. Klicken Sie auf den Papierkorb zum Löschen.',

    // Signature Modal
    'sig.title': 'Unterschrift hinzufügen',
    'sig.typeTab': 'Tippen',
    'sig.drawTab': 'Zeichnen',
    'sig.uploadTab': 'Bild hochladen',
    'sig.namePlaceholder': 'Namen eingeben...',
    'sig.clear': 'Löschen',
    'sig.apply': 'Unterschrift anwenden',
    'sig.uploadBoxPrompt': 'Klicken, um Bild hochzuladen',
    'sig.uploadBoxSub': 'PNG oder JPG, max. 5 MB',
    'sig.changeImage': 'Bild ändern',
    'sig.close': 'Dialog schließen',
  },

  fr: {
    // Branding & Navigation
    'brand.name': 'EditPDF',
    'nav.editor': 'Éditeur',
    'nav.faq': 'FAQ',
    'nav.howItWorks': 'Comment ça marche',
    'nav.support': 'Soutenir le Développeur',
    'nav.toggleTheme': 'Changer de thème',
    'nav.selectLanguage': 'Choisir la langue',

    // SEO Meta
    'seo.title': 'Éditeur PDF et Remplisseur de Formulaires Gratuit en Ligne | Sécurisé, Sans Téléchargement',
    'seo.description': 'Modifiez des fichiers PDF, remplissez des formulaires et signez instantanément dans votre navigateur. 100 % gratuit et sécurisé – vos fichiers ne quittent jamais votre appareil.',
    'seo.ogTitle': 'Éditeur PDF et Remplisseur de Formulaires Gratuit en Ligne | Sécurisé, Sans Téléchargement',

    // Hero Section
    'hero.h1': 'Éditeur PDF Sécurisé et Gratuit – Remplissez et Signez Instantanément',
    'hero.subtitle': 'Modifiez vos fichiers PDF sans les téléverser sur aucun serveur. Tout est traité localement dans votre navigateur.',

    // How It Works
    'how.title': 'Comment fonctionne notre éditeur PDF sécurisé',
    'how.p1': 'Vous souhaitez remplir vos formulaires PDF facilement tout en préservant votre confidentialité ? Notre éditeur gratuit vous permet d’ajouter du texte, de dessiner des signatures et de compléter vos documents en un clin d’œil.',
    'how.p2': 'La plupart des outils en ligne vous forcent à envoyer vos documents confidentiels (relevés bancaires, contrats) sur leurs serveurs. Notre approche est différente : tout fonctionne directement sur votre machine via les technologies web actuelles, sans aucun transfert de fichier.',

    // FAQ
    'faq.title': 'Foire Aux Questions',
    'faq.q1': 'Mes données sont-elles protégées ?',
    'faq.a1': 'Absolument. EditPDF exécute l’ensemble des opérations dans votre navigateur. Vos fichiers PDF ne sont jamais envoyés vers des serveurs distants, assurant une confidentialité totale.',
    'faq.q2': 'Puis-je ajouter ma propre signature ?',
    'faq.a2': 'Oui, vous pouvez tracer votre signature, la saisir au clavier avec différentes polices ou importer une image. Il suffit ensuite de la redimensionner et de la placer où vous le souhaitez.',
    'faq.q3': 'Faut-il créer un compte ?',
    'faq.a3': 'Non, EditPDF est gratuit et accessible sans inscription, sans abonnement et sans frais cachés.',

    // Footer
    'footer.text': 'L’ensemble du traitement est effectué localement dans votre navigateur.',

    // PDF Editor Workspace Tools
    'editor.uploadPrompt': 'Sélectionnez un PDF pour commencer l’édition',
    'editor.uploadSub': 'Vos documents sont traités en toute sécurité dans votre navigateur et ne sont jamais envoyés sur un serveur.',
    'editor.selectPdf': 'Sélectionner un fichier PDF',
    'editor.eyeCare': 'Mode Confort Visuel',
    'editor.viewEdit': 'Éditer',
    'editor.viewOrganize': 'Organiser',
    'editor.toolSelect': 'Sélection',
    'editor.toolText': 'Ajouter du texte',
    'editor.toolDraw': 'Dessiner',
    'editor.toolHighlight': 'Surligner',
    'editor.toolBlackout': 'Masquer (Noir)',
    'editor.toolWhiteout': 'Effacer (Blanc)',
    'editor.toolSignature': 'Signature',
    'editor.toolCheckmark': 'Coche',
    'editor.toolCross': 'Croix',
    'editor.toolStamp': 'Tampon',
    'editor.fontSize': 'Taille',
    'editor.bold': 'Gras',
    'editor.italic': 'Italique',
    'editor.highlighterColor': 'Couleur',
    'editor.stampApproved': 'APPROUVÉ',
    'editor.stampConfidential': 'CONFIDENTIEL',
    'editor.stampDraft': 'BROUILLON',
    'editor.stampCustom': 'PERSONNALISÉ...',
    'editor.download': 'Télécharger le PDF',
    'editor.saveDownload': 'Télécharger',
    'editor.saving': 'Enregistrement du PDF...',
    'editor.prevPage': 'Page précédente',
    'editor.nextPage': 'Page suivante',
    'editor.page': 'Page',
    'editor.of': 'sur',
    'editor.pages': 'Pages',
    'editor.deletePage': 'Supprimer la page',
    'editor.rotatePage': 'Pivoter la page',
    'editor.cannotDeleteLast': 'Impossible de supprimer la dernière page restante.',
    'editor.organizeTitle': 'Organiser les pages',
    'editor.organizeSub': 'Glissez-déposez les pages pour les réordonner. Cliquez sur la corbeille pour les supprimer.',

    // Signature Modal
    'sig.title': 'Ajouter une signature',
    'sig.typeTab': 'Saisir',
    'sig.drawTab': 'Dessiner',
    'sig.uploadTab': 'Importer une image',
    'sig.namePlaceholder': 'Saisissez votre nom...',
    'sig.clear': 'Effacer',
    'sig.apply': 'Appliquer la signature',
    'sig.uploadBoxPrompt': 'Cliquez pour importer une image',
    'sig.uploadBoxSub': 'PNG ou JPG, 5 Mo max.',
    'sig.changeImage': 'Changer d’image',
    'sig.close': 'Fermer la boîte',
  },

  ja: {
    // Branding & Navigation
    'brand.name': 'EditPDF',
    'nav.editor': 'エディター',
    'nav.faq': 'よくある質問',
    'nav.howItWorks': '使い方',
    'nav.support': '開発者を支援',
    'nav.toggleTheme': 'テーマ切替',
    'nav.selectLanguage': '言語を選択',

    // SEO Meta
    'seo.title': '無料オンラインPDFエディター＆フォーム記入 | 安全・サーバー送信なし',
    'seo.description': 'ブラウザ上で瞬時にPDF編集、フォーム入力、電子署名を追加。100%完全無料・安全で、ファイルが外部サーバーに送信されることは一切ありません。',
    'seo.ogTitle': '無料オンラインPDFエディター＆フォーム記入 | 安全・サーバー送信なし',

    // Hero Section
    'hero.h1': '安全な無料PDFエディター - フォーム入力・電子署名を瞬時に',
    'hero.subtitle': 'ファイルをサーバーにアップロードすることなくPDFを直接編集。すべての処理はお使いのブラウザ内で完結します。',

    // How It Works
    'how.title': '当PDFエディターの安全な仕組み',
    'how.p1': 'プライバシーを犠牲にすることなく、手軽にPDFフォームを編集しませんか？ テキスト追加、手書き署名、各種書類への記入がブラウザ上で今すぐ行えます。',
    'how.p2': '一般的なオンラインPDFツールは、銀行取引明細書や契約書などの機密ファイルを外部サーバーにアップロードさせる仕様がほとんどです。本ツールはブラウザの最新技術を活用し、お使いのデバイス上だけで完結するため、情報漏洩のリスクがありません。',

    // FAQ
    'faq.title': 'よくあるご質問（FAQ）',
    'faq.q1': 'データは安全に保護されますか？',
    'faq.a1': 'はい、完全に安全です。EditPDFはすべての処理をご利用のブラウザ内部でのみ実行します。ファイルがクラウドや外部サーバーに送信されることは一切ありません。',
    'faq.q2': '手書きの署名を追加できますか？',
    'faq.a2': 'はい、マウスやタッチ操作での手書き入力、お好みのフォントでのテキスト入力、または署名画像のアップロードに対応しています。追加後はサイズ変更や移動も自由自在です。',
    'faq.q3': 'アカウント登録は必要ですか？',
    'faq.a3': 'いいえ、EditPDFは会員登録やサブスクリプション、追加料金なしでどなたでもすぐにご利用いただけます。',

    // Footer
    'footer.text': 'すべての処理はお使いのブラウザ内でローカルに実行されます。',

    // PDF Editor Workspace Tools
    'editor.uploadPrompt': 'PDFファイルをアップロードして編集を開始',
    'editor.uploadSub': 'ファイルはお使いのブラウザ内で安全に処理され、サーバーに送信されることはありません。',
    'editor.selectPdf': 'PDFファイルを選択',
    'editor.eyeCare': 'アイケア（夜間）モード',
    'editor.viewEdit': '編集',
    'editor.viewOrganize': 'ページ整理',
    'editor.toolSelect': '選択',
    'editor.toolText': 'テキスト追加',
    'editor.toolDraw': '手書きペン',
    'editor.toolHighlight': '蛍光ペン',
    'editor.toolBlackout': '黒塗り（墨消し）',
    'editor.toolWhiteout': '白塗り（修正）',
    'editor.toolSignature': '電子署名',
    'editor.toolCheckmark': 'チェックマーク',
    'editor.toolCross': 'バツ印',
    'editor.toolStamp': 'スタンプ',
    'editor.fontSize': 'サイズ',
    'editor.bold': '太字',
    'editor.italic': '斜体',
    'editor.highlighterColor': '色',
    'editor.stampApproved': '承認済み',
    'editor.stampConfidential': '親展・機密',
    'editor.stampDraft': '下書き',
    'editor.stampCustom': 'カスタム...',
    'editor.download': 'PDFをダウンロード',
    'editor.saveDownload': '保存・ダウンロード',
    'editor.saving': 'PDFを保存中...',
    'editor.prevPage': '前のページ',
    'editor.nextPage': '次のページ',
    'editor.page': 'ページ',
    'editor.of': '/',
    'editor.pages': 'ページ',
    'editor.deletePage': 'ページを削除',
    'editor.rotatePage': 'ページを回転',
    'editor.cannotDeleteLast': '最後の1ページは削除できません。',
    'editor.organizeTitle': 'ページの並べ替え・整理',
    'editor.organizeSub': 'ドラッグ＆ドロップで並べ替え、ゴミ箱アイコンで不要なページを削除できます。',

    // Signature Modal
    'sig.title': '署名を作成・追加',
    'sig.typeTab': '文字入力',
    'sig.drawTab': '手書き',
    'sig.uploadTab': '画像アップロード',
    'sig.namePlaceholder': 'お名前を入力...',
    'sig.clear': 'クリア',
    'sig.apply': '署名を適用',
    'sig.uploadBoxPrompt': 'クリックして画像を選択',
    'sig.uploadBoxSub': 'PNGまたはJPG（最大5MB）',
    'sig.changeImage': '画像を変更',
    'sig.close': 'モーダルを閉じる',
  },
} as const;

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
